import React from "react";
import { useCookies, withCookies } from "react-cookie";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import CreatePost from "../screens/create/CreatePost";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute.js";
import { Routeconstant } from "./Routeconstant";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path={Routeconstant.LOGIN}
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path={Routeconstant.SIGNUP}
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path={Routeconstant.CREATE}
          element={
            <ProtectedRoute>
              <CreatePost />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default withCookies(Navigation);
