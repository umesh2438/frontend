import React, { useContext } from "react";
import { AppBar, Box, Card, CardContent, Container, Grid2, IconButton, Link, Toolbar, Typography, useMediaQuery } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ThemeContext } from "../../context/ThemeContext";
import CustomToggle from "../../components/CustomToggle";
import TopImg from "../../assets/card-primary copy.png";

const AuthLayout = ({ children }) => {
  const [darkTheme] = useContext(ThemeContext);
  const matches = useMediaQuery("(min-width:500px)");

  return (
    <React.Fragment>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: 800, textTransform: "uppercase" }}
          >
            Customer Retention
          </Typography>
          <Link href="https://github.com/umesh2438" target="_blank">
            <IconButton color="primary" style={{ cursor: "pointer" }}>
              <GitHubIcon sx={{ color: darkTheme ? "#fff" : "#000" }} />
            </IconButton>
          </Link>
          <Box sx={{ display: "flex" }}>
            <CustomToggle />
          </Box>
        </Toolbar>
      </AppBar>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <Card sx={{ width: matches ? 425 : "90%" }}>
          <img src={TopImg} alt="" style={{ height: 200 }} />
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: 1, pt: 0 }}
          >
            {children}
          </CardContent>
        </Card>
      </Container>
      <Grid2
        container
        component="footer"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        }}
      >
        Developed by
        <Link href="https://www.brainyboye.online/" target="_blank" ml={1}>
          Umesh
        </Link>
      </Grid2>
    </React.Fragment>
  );
};

export default AuthLayout;
