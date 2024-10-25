import React from "react";
import Moon from "../../assets/moon.png";
import Telescope from "../../assets/telescope.png";
import RocketLauncher from "../../assets/rocket-launcher.png";
import { Box, Button, Grid, Grid2, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const Session = () => {
  const navigate = useNavigate();

  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Box component="section">
      <Grid2 container spacing={2}>
        <Grid2 item xs={12} sm={6} md={6}>
          <Box sx={{ position: "relative" }}>
            <img
              src={Moon}
              alt=""
              style={{
                height: 300,
                width: "auto",
                position: "absolute",
                zIndex: -1,
                top: 10,
                left: 30,
              }}
            />
            <img
              src={RocketLauncher}
              alt=""
              style={{ maxHeight: "100vh", width: "auto", maxWidth: "100%" }}
            />
          </Box>
        </Grid2>
        <Grid2
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexDirection: "column",
              p: 1,
            }}
          >
            <Typography component="h1" variant="h3">
              Error 419
            </Typography>
            <Typography component="h2" variant="h5">
              Session Expired{" "}
            </Typography>
            <Typography component="p" variant="body2">
              Either you have not loged In or your session has expired Kindly Login again.{" "}
            </Typography>
            <Box>
              <Button
                onClick={() => navigate("/")}
                variant="contained"
                color="secondary"
              >
                Go to Home Page
              </Button>
            </Box>
          </Box>

          {matches && (
            <img
              src={Telescope}
              alt=""
              style={{
                height: 300,
                width: "auto",
                position: "absolute",
                zIndex: -1,
                top: "50vh",
                left: "50%",
              }}
            />
          )}
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Session;
