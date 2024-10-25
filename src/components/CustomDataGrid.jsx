import { DataGrid } from '@mui/x-data-grid';

const CustomDataGrid = ({
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
      selectableRowsOnClick: true,
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
  
  export default CustomDataGrid;