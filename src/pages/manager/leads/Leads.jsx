import { Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import CustomTable from "../../../components/CustomTable";
import { convertDateToDateWithoutTime } from "../../../utils/calendarHelpers";
import { Link } from "react-router-dom";
import { Add as AddIcon } from "@mui/icons-material";
import { apiLeads } from "../../../services/models/manager/leadsModel";

const Leads = () => {
  const [leads, setLeads] = useState([])

     useEffect(() => {
       apiLeads.getAll("").then(res => setLeads(res.data))
        
        .catch(error => console.log(error));
     }, []);
  

  const columns = [
    { label: "Name", name: "name" },
    { label: "Email", name: "email" },
    { label: "Address", name: "address" },
    { label: "Phone No.", name: "number" },
    { label: "Company", name: "company" },
    { label: "Priority", name: "priority" },
    { label: "Product", name: "product" },
    //{ label: "Last Activity", name: "lastActivity", options: { customBodyRender: (data) => (<span>{convertDateToDateWithoutTime(data)}</span>),},},
    { label: "Status", name: "status" },
    //{ label: "Created At", name: "createdAt", options: { customBodyRender: (data) => (<span>{convertDateToDateWithoutTime(data)}</span>),},},
    { name: "url", label: "Action", options: { customBodyRender: () => (
    <Button variant="contained" size="small" onClick={() => {}}>View</Button>),},},
    { name: "url", label: "Email", options: { customBodyRender: () => (
    <Button variant="contained" size="small" onClick={() => {}}>Quote</Button>),},},
  ];

  return (
    <>
    <Box align="start" mb={1}>
      <Link to="add-lead" >
        <Button variant="contained" >
          <AddIcon /> Add Leads
        </Button>
      </Link>
    </Box>
      <CustomTable
        columns={columns}
        data={leads}
        title="Leads"
        downloadName="leads"
      />
    </>
  );
};

export default Leads;
