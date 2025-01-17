import React, { useState } from "react";
import { Alert, Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { apiAuth } from "../../services/models/authModel";
import { CustomAuthInput } from "../../components/CustomInputs";
import { LoadingButton } from "@mui/lab";

const Signup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter valid email!")
      .required("Email is required !"),
    password: Yup.string().required("Password is required !"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    role: "",
  };
  const { errors, values, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      registerUser(values);
    },
  });

  const registerUser = (values) => {
    apiAuth.post({...values}, "register").then((res) => {
      if (res.status === "200") {
        toast.success("User Regestered");
        setIsLoading(false);
        navigate("/verification?status=not-verified");
      } else {
        toast.error(res.message);
        setIsLoading(false);
      }
    });
  };

  return (
    <>
      <Typography component="h1" variant="h4">
        Register
      </Typography>
      <Alert severity="info" variant="filled" style={{ margin: "0 3px" }}>
        If you want to register as employee or co admin you should ask your
        existing admin to send an invitation email
      </Alert>
      <CustomAuthInput
        name="name"
        placeholder="enter name"
        type = "text"
        values={values}
        handleChange={handleChange}
        touched={touched}
        errors={errors}
      />
      <CustomAuthInput
        placeholder="enter email"
        name="email"
        type = "email"
        values={values}
        handleChange={handleChange}
        touched={touched}
        errors={errors}
      />
      <CustomAuthInput
        name="role"
        placeholder="Role"
        type = "text"
        values={values}
        handleChange={handleChange}
        touched={touched}
        errors={errors}
      />
      <CustomAuthInput
        placeholder="enter password"
        name="password"
        type = "password"
        values={values}
        handleChange={handleChange}
        touched={touched}
        errors={errors}
      />
      <LoadingButton
        loading={isLoading}
        loadingIndicator="Loading…"
        variant="contained"
        onClick={handleSubmit}
        fullWidth
        className="mt-3"
      >
        Sign Up
      </LoadingButton>
      {/* <Button
        variant="contained"
        fullWidth
        className="mt-3"
        onClick={handleSubmit}
      >
        Register as Admin
      </Button> */}
      <Box>
        <Link to="/login" style={{ textDecoration: "underline" }}>
          Have account already? then Signin
        </Link>
      </Box>
    </>
  );
};

export default Signup;
