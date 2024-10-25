import React, {useState, useEffect} from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import User from "../users/Users";
import Leads from "../leads/Leads";




const Dashboard = () => {
  const userName = localStorage.getItem("CRM-name");
  const Greeting = () => {
    var myDate = new Date();
    var hours= myDate.getHours();
    var greet;

    if (hours < 12)
        greet =  "Morning";
    else if (hours >= 12 && hours <= 17)
        greet = "Afternoon";
    else if (hours >= 17 && hours <= 24)
        greet = "Evening";

    return <span>Good {greet}! {userName}</span>
}
/*
const [quotes, setQuotes] = useState([])

useEffect(() => {
  axios.get("localhost:4050/api/components").then(res => setQuotes(res.data))
   
   .catch(error => console.log(error));
}, []);
*/

  return (
    <Box component="section">
        <Typography component="h5" variant="h5"><Greeting /></Typography>
        <Typography component="h6" variant="h6">New leads</Typography>
        <Box>
          <Leads />
        </Box>
        <Typography component="h6" variant="h6">User Details</Typography>
        <Box>
          <User />
        </Box>
        {/*<Typography component="h5" variant="h5">Daily Quotes is {quotes}</Typography>*/}
    </Box>
  );
};

export default Dashboard;