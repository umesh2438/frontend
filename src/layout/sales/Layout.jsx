import React from "react";
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import Topbar, { menuContents } from "./components/Topbar";
import { primary } from "../../theme/themeColors";

const Layout = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      
      <Typography variant="h5" component="h5" sx={{p:2}}>CRM</Typography>
      <Divider />
      <List>
        {menuContents.map((item, index) => (
          <ListItemButton key={index} component={NavLink} to={item.link}>
            <ListItemIcon sx={{color:primary[500]}}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <section className="wrapper">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Topbar handleDrawerToggle={handleDrawerToggle} />

        {/* Sidebar */}
        <Box component="nav" aria-label="sidebar" className="sidebar">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "block", md: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                //boxShadow: 3,
                m: 1,
                width: 230,
                border: "none",
                borderRadius: 2,
                //backgroundColor: "transparent",
                position: "relative",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: "100%",
            overflowY: "scroll",
          }}
          className="main-panel"
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </section>
  );
};

export default Layout;
