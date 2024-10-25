import React, { useState, useEffect } from 'react';
import CustomTable from "../../../components/CustomTable";
import { convertDateToDateWithoutTime } from "../../../utils/calendarHelpers";
import { Box, Button, Grid2 } from "@mui/material";
import { Link } from "react-router-dom";
import { Add as AddIcon } from "@mui/icons-material";
import apiUsers from "../../../services/models/employee/usersModel";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Users = () => {
  const [userData, setUserData] = useState([])

     useEffect(() => {
       apiUsers.getAll("").then(res => setUserData(res.data))
        
        .catch(error => console.log(error));
     }, []);

  const columns = [
    { label: "Name", name: "name" },
    { label: "Email", name: "email" },
    { label: "Role", name: "role" },
    { label: "Phone No", name: "phoneno" },
    //{ label: "Last Activity", name: "lastActivity", options: {customBodyRender: (data) => (<span>{convertDateToDateWithoutTime(data)}</span>),},},
    //{ label: "Created At", name: "createdAt", options: { customBodyRender: (data) => (<span>{convertDateToDateWithoutTime(data)}</span>),},},
    {
      name: "url",
      label: "Actions",
      options: {
        customBodyRender: () => (
          <>
          <Grid2>
          <Button
            variant="contained"
            size="small"
            sx={{ mb: 2, px: 2.3}}
            startIcon={<EditIcon />}
            onClick={() => {}}
          >
            Edit
          </Button>
          <br/>
          <Button
          variant="contained"
          size="small"
          color='error'
          startIcon={<DeleteIcon />}
          onClick={() => {}}
        >
          Delete
        </Button>
        </Grid2>
        </>
        ),
      },
    },
  ];

  return (
    <>
    <Box align="start" mb={1}>
      <Link to="add-user">
        <Button variant="contained" sx={{ marginLeft: "auto" }}>
          <AddIcon /> Add User
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

export default Users;