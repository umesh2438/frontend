import React, { useEffect } from "react";
import {
  ConfirmationNumberOutlined,
  Dashboard,
  EmailOutlined,
  FactCheckOutlined,
  LocalPhoneOutlined,
  LogoutOutlined,
  MenuOutlined,
  MoreVert,
  PeopleAlt,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import CustomToggle from "../../../components/CustomToggle";
import { primary } from "../../../theme/themeColors";
import InventoryIcon from '@mui/icons-material/Inventory';
import DescriptionIcon from '@mui/icons-material/Description';
import { apiAuth } from "../../../services/models/authModel";

const Topbar = ({ handleDrawerToggle }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const profile = () => {
    navigate("dashboard");
  }
  function logout(){
    localStorage.clear();
    navigate("/");
  };

  const renderMenu = (
    <Menu
      id="long-menu"
      MenuListProps={{
        "aria-labelledby": "long-button",
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>
        <CustomToggle />
      </MenuItem>
      <MenuItem onClick={profile}>
        <ListItemIcon>
          <PersonOutlineOutlined />
        </ListItemIcon>
        <Typography variant="inherit">Profile</Typography>
      </MenuItem>
      <MenuItem onClick={logout}>
        <ListItemIcon>
          <LogoutOutlined />
        </ListItemIcon>
        <Typography variant="inherit">Logout</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          CRM
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <List sx={{ display: { xs: "none", sm: "flex" } }}>
          {menuContents.map((item, index) => (
            <ListItemButton
              key={index}
              component={NavLink}
              to={item.link}
              style={({ isActive, isPending }) => {
                return {
                  //color: isActive ? primary[500] : "inherit",
                  borderRadius:10,
                  backgroundColor: isActive ? primary[500] : "inherit",
                  color: isActive ? "#fff" : "inherit",
                  //color: isPending ? "red" : "black",
                };
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          color="inherit"
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVert />
        </IconButton>
        {renderMenu}
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;

export const menuContents = [
  {
    title: "Dashboard",
    link: "/employee/dashboard",
    icon: <Dashboard />,
  },
  {
    title: "Products",
    link: "/employee/product",
    icon: <InventoryIcon />,
  },
  {
    title: "Users",
    link: "/employee/users",
    icon: <PeopleAlt />,
  },
  {
    title: "Leads",
    link: "/employee/leads",
    icon: <LocalPhoneOutlined />,
  },
  {
    title: "Services",
    link: "/employee/services",
    icon: <ConfirmationNumberOutlined />,
  },
  {
    title: "Todos",
    link: "/employee/todos",
    icon: <FactCheckOutlined />,
  },
  {
    title: "Email",
    link: "/employee/emails",
    icon: <EmailOutlined />,
  },
  {
    title: "Invoice",
    link: "/employee/invoice",
    icon: <DescriptionIcon />,
  },
  
];
