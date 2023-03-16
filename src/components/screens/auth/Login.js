import { Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Formik } from "formik";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../../api/Interceptor";
import { LoginValidator } from "../../../helper/helper";
import { AuthContext } from "../../../store/store";
import { Routeconstant } from "../../routing/Routeconstant";
import { LOCAL_STORAGE_KEY } from "../../../Config";
const Login = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const onClickLogin = (value) => {
    console.log(value);
    const body = {
      email: value.email,
      password: value.password,
    };
    instance
      .post("login", body)
      .then((res) => {
        context.setIslogin(true);
        context.setToken(res.token);
        navigate(Routeconstant.HOME);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container-form d-flex justify-content-center h-100 align-items-center">
      <Formik
        initialValues={LoginValidator.initials}
        validationSchema={LoginValidator.validation}
        onSubmit={(values, actions) => {
          onClickLogin(values, actions);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit} className="w-50">
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                fontSize: "2rem",
                fontWeight: "700",
              }}
            >
              Welcome Back
            </Typography>
            <div className="d-flex " id="email">
              <TextField
                fullWidth
                label="email"
                type="email"
                value={props.values.email}
                variant="standard"
                onChange={(event) => {
                  props.setFieldValue("email", event.target.value);
                }}
              />
              {/* {props.errors.email && (
                <span className="span-error">{props.errors.email}</span>
              )} */}
            </div>
            <div className="d-flex" id="password">
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={props.values.password}
                variant="standard"
                onChange={(event) => {
                  props.setFieldValue("password", event.target.value);
                }}
              />
              {/* {props.errors.password && (
                <span className="span-error">{props.errors.password}</span>
              )} */}
            </div>
            <div className="submit mt-3 d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              {/* <a
                className="pointer"
                // onClick={() => navigate(routeConstant.FORGETPASSWORD)}
              >
                &gt; Forgot password?
              </a> */}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
