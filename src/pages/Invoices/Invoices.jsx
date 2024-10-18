import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./invoices";
import Head from './../../Components/Head';
export default function Invoices() {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
       <Head title={"INVOICES"} subtitle={"List of Invoice Balances"} />
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
        checkboxSelection
      />
    </Box>
  );
}
