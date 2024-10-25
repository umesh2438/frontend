import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


const navigate = useNavigate;

const Logout = () => {

    const login = () => {
        navigate("/login");
    }
    return(
        <>
        <Typography component="h3" variant="h3">You are Successfully Loged Out Please Login again</Typography>
        <Button onClick={{login}}>
        Go to Login
        </Button>
        </>
      );
};

export default Logout;
