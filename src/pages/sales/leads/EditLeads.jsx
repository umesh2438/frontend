import { React, useState, useEffect } from "react";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { Box, Button } from "@mui/material";
import CustomModal from "../../../components/CustomModal";
import { CustomSelectField, CustomTextField, CustomTextAreaField,} from "../../../components/CustomInputs";
import {CustomeDateTimePicker} from "../../../components/CustomeDateTimePicker"
import apiLeads from "../../../services/models/sales/leadsModel";
import Leads from './Leads';
import { Navigate } from "react-router-dom";


const EditLeads = ({ open, setOpen }) => {
  const validationSchema = Yup.object().shape({
    priority: Yup.string(),
    product: Yup.string(),
    status: Yup.string(),
    followUp: Yup.string(),
  });

  const initialValues = {
    priority: "",
    product: "",
    status: "",
    followUp: "",
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
      editLeads(values);
      onClose();
    },
  });


  const editLeads = (values) => {
    apiLeads.putById(values, `:${id}`).then((res) => {
      if (res.status === "200") {
        toast.success("Details Saved");
        <Navigate to="/sales/leads" replace={true} />
      } else {
        toast.error(res.message);
      }
    });
  };
  
  const onClose = () => setOpen(false);

  return (
    <CustomModal open={open} onClose={onClose} title="Edit Contacts" >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1}}
      >
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
        <CustomTextAreaField
          name="followUp"
          placeholder="Enter your Text"
          handleChange={handleChange}
          values={values}
          touched={touched}
          errors={errors}
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

export default EditLeads;
