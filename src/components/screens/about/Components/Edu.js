import React from "react";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";

const Edu = () => {
  return (
    <Grid item xs={12}>
      <Paper elevation={3} style={{ padding: "1rem" }}>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} style={{ display: "flex" }}>
              <Typography sx={{ fontWeight: "700", fontSize: "1.5rem" }}>
                Education
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
              }}
            >
              <Typography sx={{ paddingRight: "0.5rem" }}>
                Bachelor of Engineering ( Mechanical Engineering )
              </Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>from</Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>
                <b>Sant Longowal Institute of Engineering and Technology</b>
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                paddingTop: "0",
              }}
            >
              <Typography sx={{ paddingRight: "0.5rem" }}>
                (July 2019
              </Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>to</Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>
                June 2022)
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
              }}
            >
              <Typography sx={{ paddingRight: "0.5rem" }}>
                Diploma ( Mechanical Engineering )
              </Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>from</Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>
                <b>Sant Longowal Institute of Engineering and Technology</b>
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                paddingTop: "0",
              }}
            >
              <Typography sx={{ paddingRight: "0.5rem" }}>
                (July 2016
              </Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>to</Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>
                June 2019)
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
              }}
            >
              <Typography sx={{ paddingRight: "0.5rem" }}>
                Matriculation
              </Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>from</Typography>
              <Typography sx={{ paddingRight: "0.5rem" }}>
                <b>Darbhanga Public School</b>
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                paddingTop: "0",
              }}
            >
              <Typography sx={{ paddingRight: "0.5rem" }}>( 2016 )</Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Edu;
