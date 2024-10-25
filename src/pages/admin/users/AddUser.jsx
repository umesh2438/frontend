import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Grid2, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { CustomSelectField, CustomTextField } from "../../../components/CustomInputs";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { apiAuth } from "../../../services/models/authModel";

const AddUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string("Should be string").required("Name is required !"),
    email: Yup.string().email("Enter valid email!").required("Email is required !"),
    role: Yup.string(),
    number: Yup.number().min(10),
    password: Yup.string().required("Password is required !"),
  });

  const initialValues = {
    name: "",
    email: "",
    role: "",
    password: "",
  };
  const { errors, values, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setIsLoading();
      inviteUser(values);
    },
  });

  const inviteUser = async(values) => {
    await apiAuth.post(values, "register").then((res) => {
      if (res.status === "200") {
        navigate("/admin/users");
        toast.success("User Registered");
        setIsLoading(false);
      } else {
        toast.error(res.message);
        setIsLoading(false);
      }
    });
  };

  return (
    <Box component="section">
      <Container>
        <Typography component="h1" variant="h4" sx={{ mb: 4 }}>
          Add User
        </Typography>
        <Grid2 container spacing={2}>
          <Grid2 item xs={12} sm={6} md={6}>
            <Box component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                // marginTop: 5,
              }}
            >
              <CustomTextField
                label="Name"
                name="name"
                placeholder="ex: Ram"
                values={values}
                handleChange={handleChange}
                touched={touched}
                errors={errors}
              />
              <CustomTextField
                label="Email"
                name="email"
                placeholder="ex: james@company.com"
                values={values}
                handleChange={handleChange}
                touched={touched}
                errors={errors}
              />
              <CustomTextField
                label="Phone No"
                name="number"
                placeholder="Phoneno"
                values={values}
                handleChange={handleChange}
                touched={touched}
                errors={errors}
                type="number"
              />
              <CustomSelectField
                label="Role"
                name="role"
                placeholder="role"
                values={values}
                handleChange={handleChange}
                touched={touched}
                errors={errors}
                labelItms={[
                  { val: "admin", label: "Admin" },
                  { val: "manager", label: "Manager" },
                  { val: "sales", label: "Sales" },
                ]}
              />
              <CustomTextField
                label="Password"
                name="password"
                placeholder="enter password"
                values={values}
                handleChange={handleChange}
                touched={touched}
                errors={errors}
                type="password"
                autocomplete="current-password"
              />
            </Box>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={6}>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                // marginTop: 5,
              }}
            >
              <LoadingButton
                loading={isLoading}
                loadingIndicator="Loading…"
                variant="contained"
                onClick={handleSubmit}
              >
                Invite User
              </LoadingButton>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default AddUser;
