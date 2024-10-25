import React from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const CustomTable = ({
  columns,
  data,
  title = "Table",
  downloadName = "file",
}) => {
  const options = {
    Sort: true,
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    
    };
  return (
    <>
    
      <MUIDataTable
        title={title}
        data={data}
        columns={columns}
        options={options}
        downloadOptions={{ filename: downloadName }}
      />
      
    </>
  );
};

export default CustomTable;
