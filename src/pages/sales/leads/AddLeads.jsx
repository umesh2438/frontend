import React from "react";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { Box, Button } from "@mui/material";
import CustomModal from "../../../components/CustomModal";
import { CustomSelectField, CustomTextField, } from "../../../components/CustomInputs";
import apiLeads from "../../../services/models/sales/leadsModel";
import { Navigate } from "react-router-dom";

const AddLeads = ({ open, setOpen }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Contact name is Required!"),
    email: Yup.string().email("Enter valid email!"),
    number: Yup.number().min(10),
    address: Yup.string().required("Address is Required!"),
    company: Yup.string(),
    priority: Yup.string(),
    product: Yup.string(),
    status: Yup.string().required("Enter Valid Status"),
  });

  const initialValues = {
    name: "",
    email: "",
    number: "",
    address: "",
    company: "",
    priority: "",
    product: "",
    status: "",
  };
  const {
    errors,
    values,
    handleChange,
    handleSubmit,
    touched /*setFieldValue*/,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      addLeads(values);
      onClose();
    },
  });

  const addLeads = (values) => {
    apiLeads.post(values, "").then((res) => {
      if (res.status === "200") {
        toast.success("Contact Created");
        <Navigate to="/sales/leads" replace={true} />
      } else {
        toast.error(res.message);
      }
    });
  };
  
  const onClose = () => setOpen(false);

  return (
    <CustomModal open={open} onClose={onClose} title="Add Contacts" sx={{Opacity:1}}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1}}
      >
        <CustomTextField
          label="Name"
          name="name"
          placeholder="Name"
          values={values}
          handleChange={handleChange}
          touched={touched}
          errors={errors}
        />
        <CustomTextField
          label="Email"
          name="email"
          placeholder="Enter email ex: demo@email.com"
          values={values}
          handleChange={handleChange}
          touched={touched}
          errors={errors}
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
          label="Phone No"
          name="number"
          placeholder="Phone No"
          values={values}
          handleChange={handleChange}
          touched={touched}
          errors={errors}
          type="number"
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
        <CustomSelectField
          label="Priority"
          name="priority"
          placeholder="Priority"
          values={values}
          handleChange={handleChange}
          touched={touched}
          errors={errors}
          labelItms={[
            { val: "Low", label: "Low" },
            { val: "Medium", label: "Medium" },
            { val: "High", label: "High" },
            { val: "VeryHigh", label: "Very High" },
          ]}
        />
        <CustomSelectField
          label="Product"
          name="product"
          placeholder="product"
          values={values}
          handleChange={handleChange}
          touched={touched}
          errors={errors}
          labelItms={[
            { val: "Select Any Product", label: "Select any Product" },
            { val: "Kalorie Automatic Voltage Stabilizer (100V to 260V) for AC", label: "Kalorie Automatic Voltage Stabilizer (100V to 260V) for AC" },
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
          label="Status"
          name="status"
          placeholder="Lead Status"
          values={values}
          handleChange={handleChange}
          touched={touched}
          errors={errors}
          labelItms={[
            { val: "New", label: "New" },
            { val: "Open", label: "Open" },
            { val: "InProgress", label: "In Progress" },
            { val: "Attempted", label: "Attempted to Connect" },
            { val: "Connected", label: "Connected" },
            { val: "Closed", label: "Closed" },
          ]}
        />
        <Box align="end" mt={1}>
          <Button variant="outlined" onClick={handleSubmit} type="submit">
            Add
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={onClose}
            sx={{ ml: 2 }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </CustomModal>
  );
};

export default AddLeads;