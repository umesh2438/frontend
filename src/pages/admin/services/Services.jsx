import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import CustomTable from "../../../components/CustomTable";
import AddServices from "./AddServices";
import { Add as AddIcon } from "@mui/icons-material";
import { apiServices } from "../../../services/models/admin/serviceModel";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    async function Data () {
      await apiServices.getAll("").then(res => setServices(res.data))
      .catch(error => console.log(error));
    }
      Data();
  }, []);

  const columns = [
    { label: "Name", name: "name" },
    { label: "Email", name: "email" },
    { label: "Phone No.", name: "number" },
    { label: "Company", name: "company"},
    { label: "Priority", name: "priority"},
    { label: "Employee Name", name: "employeeName"},
    { label: "Product", name: "product"},
    { label: "Address", name: "address"},
    { label: "Last Activity", name: "lastActivity" },
    { label: "Lead Status", name: "status" },
    { label: "Created At", name: "createdAt" },
  ];

  //const [open, setOpen] = useState(false);
  const [openAddServicesModal, setOpenAddServicesModal] = useState(false);

  return (
    <React.Fragment>
      <Box align="start" mb={1}>
        <Button
          onClick={() => setOpenAddServicesModal(true)}
          variant="contained"
        >
          <AddIcon /> Add Service
        </Button>
      </Box>

      <AddServices open ={openAddServicesModal} setOpen ={setOpenAddServicesModal} />
      <CustomTable columns={columns} data={services} title="Services" />
    </React.Fragment>
  );
};

export default Services;
