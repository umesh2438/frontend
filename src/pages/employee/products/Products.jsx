import React, { useState, useEffect } from 'react';
import CustomTable from "../../../components/CustomTable";
import { convertDateToDateWithoutTime } from "../../../utils/calendarHelpers";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Add as AddIcon } from "@mui/icons-material";
import apiUsers from "../../../services/models/employee/usersModel";

const Products = () => {
  const [userData, setUserData] = useState([])

     useEffect(() => {
       apiUsers.getAll("").then(res => setUserData(res.data))
        
        .catch(error => console.log(error));
     }, []);
  //const [{name, email, role }] = userData;
  //const data = [{name: "name", email: "email", role: "role",}]

  const columns = [
    { label: "Name", name: "name" },
    { label: "Email", name: "email" },
    { label: "Role", name: "role" },
    /*{ label: "Last Activity", name: "lastActivity", options: {customBodyRender: (data) => (<span>{convertDateToDateWithoutTime(data)}</span>),},},
    { label: "Created At", name: "createdAt", options: { customBodyRender: (data) => (<span>{convertDateToDateWithoutTime(data)}</span>),},},*/
    {
      name: "url",
      label: "Actions",
      options: {
        customBodyRender: (tableMeta) => (
          <Button
            variant="contained"
            size="small"
            // onClick={() => {
            //   setIndex(tableMeta?.rowIndex);
            //   setOpen(true);
            // }}
          >
            View
          </Button>
        ),
      },
    },
  ];

  return (
    <>
    <Box mb={1}>
      <Link to="add-product">
        <Button variant="contained" sx={{ marginLeft: "auto" }}>
          <AddIcon /> Add Product
        </Button>
      </Link>
      </Box>

      <CustomTable
        columns={columns}
        data={userData}
        title="Contacts"
        downloadName="contacts"
      />
    </>
  );
};

export default Products;