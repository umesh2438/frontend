import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CustomAuthInput, CustomSelectField } from "../../components/CustomInputs";
import { apiAuth } from "../../services/models/authModel";
import { FlashOnTwoTone } from "@mui/icons-material";
import DelayingAppearance from '../../components/CustomeLoader';


const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter valid email!")
      .required("Email is required !"),
    //role: Yup.string().required(),
    password: Yup.string().min(6).required("Password is required !"),
  });

  const initialValues = {
    email: "",
    password: "",
    //role: "",
  };
  const { errors, values, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
    loginUser(values);
    },
  });
  const loginUser = (users) => {
    apiAuth.post(users, "login").then((res) => {
      const role = res.message.role;
      if (res.status === "200") {
        setIsLogin(true);
        if (role === "admin"){
        navigate("/admin/dashboard");
        localStorage.setItem("CRM-name", res.message.name);
        localStorage.setItem("CRM-id", res.message.id);
        localStorage.setItem("CRM-token", res.message.token);
        localStorage.setItem("Role", role);
        localStorage.setItem("isLogin", true);
        }else if (role === "manager"){
        navigate("/manager/dashboard");
        localStorage.setItem("CRM-name", res.message.name);
        localStorage.setItem("CRM-id", res.message.id);
        localStorage.setItem("CRM-token", res.message.token);
        localStorage.setItem("Role", role);
        localStorage.setItem("isLogin", true);
        }else if (role === "employee") {
        navigate("/employee/dashboard");
        localStorage.setItem("CRM-name", res.message.name);
        localStorage.setItem("CRM-id", res.message.id);
        localStorage.setItem("CRM-token", res.message.token);
        localStorage.setItem("Role", role);
        localStorage.setItem("isLogin", true);
        }else if (role === "sales") {
        navigate("/sales/dashboard");
        localStorage.setItem("CRM-name", res.message.name);
        localStorage.setItem("CRM-id", res.message.id);
        localStorage.setItem("CRM-token", res.message.token);
        localStorage.setItem("Role", role);
        localStorage.setItem("isLogin", true);
          }
      }else if (res.status === "401") {
        localStorage.setItem("isLogin", false);
        localStorage.setItem("CRM-email", users.email);
        navigate("/verification?status=not-verified");
      } else {
        setIsLogin(false);
        localStorage.setItem("isLogin", false);
        console.log(res.message);
        toast.error(res.message);
      }
        
    });
  };
  

  return (
    <Box component="div" sx={{
      display: "flex",
      flexDirection: "column",
      gap: 4,
      // marginTop: 5,
    }}>
      <Container>
      <Typography component="h1" variant="h4" sx = {{ mb: 4}}>
        Log In
      </Typography>
      <Box component="form" sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                // marginTop: 5,
              }}>
      <CustomAuthInput
        name="email"
        placeholder="ex: james@company.com"
        type="email"
        values={values}
        handleChange={handleChange}
        touched={touched}
        errors={errors}
        autocomplete="given-name"
      />
      <CustomAuthInput
        name="password"
        placeholder="enter password"
        values={values}
        handleChange={handleChange}
        touched={touched}
        errors={errors}
        type="password"
        autocomplete="current-password"
      />
      {/*<CustomSelectField
                label="Role"
                name="role"
                placeholder="role"
                values={values}
                handleChange={handleChange}
                touched={touched}
                errors={errors}
                labelItms={[
                  { val: "manager", label: "Manager" },
                  { val: "sales", label: "Sales" },
                  { val: "admin", label: "Admin" },
                ]}
              /> */}

      <Button variant="contained" fullWidth onClick={handleSubmit}>
        Login
      </Button>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt:1 }}>
        <Link to="/signup" style={{ textDecoration: "underline" }}>No account created? then Signup</Link>
        <Link to="/forget-password" style={{ textDecoration: "underline" }}>Forgot Password?</Link>
      </Box>
      </Container>
    </Box>
  );
};

export default Login;