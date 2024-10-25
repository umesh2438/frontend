import React, { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { Box, Grid2, Container, Typography } from "@mui/material";
import { CustomSelectField, CustomTextField, } from "../../../components/CustomInputs";
import { apiLeads } from "../../../services/models/employee/leadsModel";

const AddLeads = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Contact name is Required!"),
    email: Yup.string().email("Enter valid email!"),
    address: Yup.string().required("Address is Required!"),
    company: Yup.string(),
    number: Yup.number(),
    priority: Yup.string(),
    product: Yup.string(),
    jobTitle: Yup.string(),
    status: Yup.string().required("enter valid status"),
  });

  const initialValues = {
    name: "",
    email: "",
    address: "",
    company: "",
    priority: "low",
    jobTitle: "",
    product: "Kalorie Automatic Voltage Stabilizer for AC",
    status: "new",
  };
  const { errors, values, handleChange, handleSubmit, touched /*setFieldValue*/, } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setIsLoading();
      addLead(values);
      console.log(values);
    },
  });

  const addLead = (values) => {
    apiLeads.post(values, "").then((res) => {
      if (res.status === "200") {
        navigate("/admin/leads");
        toast.success("Contact Added");
      } else {
        toast.error(res.message);
        console.log(res.message);
      }
    });
  };

  return (
      <Box component="form" align="center">
        <Container>
        <Typography component= "h1" variant="h4" sx = {{ mb: 4}}>
          Add Lead
        </Typography>
        <Grid2 container spacing={2} justifyContent="center">
        <Grid2 item xs={12} sm={6} md={6} lg={6} alignItems="center">
            <Box align="center"
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
          placeholder="enter email ex: demo@email.com"
          values={values}
          handleChange={handleChange}
          touched={touched}
          errors={errors}
        />
        <CustomTextField
          label="Phone No"
          name="number"
          placeholder="number"
          values={values}
          handleChange={handleChange}
          touched={touched}
          errors={errors}
          type="number"
        />
        <CustomTextField
          label="Address"
          name="address"
          placeholder="address"
          values={values}
          handleChange={handleChange}
          touched={touched}
          errors={errors}
        />
        <CustomTextField
          label="Company"
          name="company"
          placeholder="company"
          values={values}
          handleChange={handleChange}
          touched={touched}
          errors={errors}
        />
        </Box>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                // marginTop: 5,
              }}
            >
        <CustomSelectField
          label="Product"
          name="product"
          placeholder="Select any product"
          values={values}
          handleChange={handleChange}
          touched={touched}
          errors={errors}
          labelItms={[
            { val: "Kalorie Automatic Voltage Stabilizer for AC", label: "Kalorie Automatic Voltage Stabilizer (100V to 260V) for AC" },
            { val: "Kalorie Automotive Battery 12V", label: "Kalorie Automotive Battery 12V" },
            { val: "Havells Life Line Plus S3 HRFR Cables 0.5mm to 6.0mm", label: "Havells Life Line Plus S3 HRFR Cables 0.5mm to 6.0mm" },
            { val: "Liebert S600D UPS with Inbuilt Phase Reversal Correction", label: "Liebert S600D UPS with Inbuilt Phase Reversal Correction" },
            { val: "Liebert S600E Online UPS", label: "Liebert S600E Online UPS" },
            { val: "Liebert Powerbank 600 RT Online UPS with Isolation Transformer", label: "Liebert Powerbank 600 RT Online UPS with Isolation Transformer" },
            { val: "Liebert S600E UPS with Inbuilt Phase Reversal Correction", label: "Liebert S600E UPS with Inbuilt Phase Reversal Correction" },
            { val: "Liebert ITA 2 Online UPS without Isolation Transformer", label: "Liebert ITA 2 Online UPS without Isolation Transformer" },
            { val: "Liebert GXT-MT+1*1 UPS with Inbuilt MBS", label: "Liebert GXT-MT+1*1 UPS with Inbuilt MBS" },
          ]}
        />
        <CustomSelectField
          label="Priority"
          name="priority"
          placeholder="priority"
          values={values}
          handleChange={handleChange}
          touched={touched}
          errors={errors}
          labelItms={[
            { val: "low", label: "Low" },
            { val: "medium", label: "Medium" },
            { val: "high", label: "High" },
            { val: "veryHigh", label: "Very High" },
          ]}
        />
        <CustomTextField
          label="Job Title"
          name="jobTitle"
          placeholder="jobTitle"
          values={values}
          handleChange={handleChange}
          touched={touched}
          errors={errors}
        />
        <CustomSelectField
          label="Lead Status"
          name="status"
          placeholder="status"
          values={values}
          handleChange={handleChange}
          touched={touched}
          errors={errors}
          labelItms={[
            { val: "new", label: "New" },
            { val: "open", label: "Open" },
            { val: "inProgress", label: "In Progress" },
            { val: "openDeal", label: "Open Deal" },
            { val: "unqualified", label: "Unqualified" },
            { val: "badTiming", label: "Bad Timing" },
            { val: "attempted", label: "Attempted to Connect" },
            { val: "connected", label: "Connected" },
            { val: "closed", label: "Closed" },
          ]}
        />
        </Box>
        </Grid2>
        </Grid2>
        <Box align="center" mt={2}>
        <LoadingButton
                loading={isLoading}
                loadingIndicator="Loading…"
                variant="contained"
                onClick={handleSubmit}
              >
                Add
              </LoadingButton>
        </Box>
        </Container>
      </Box>
  );
};

export default AddLeads;