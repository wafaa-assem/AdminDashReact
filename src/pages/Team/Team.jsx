import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./team";
import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Head from './../../Components/Head';
export default function Team() {
  const theme = useTheme();
  const columns = [
    {
      field: "id",
      headerName: "id",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              bgcolor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#26a69a",
              p: "5px",
              borderRadius: "3px",
              width: "99px",
              display: "inline-flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            {access === "Admin" ? (
              <AdminPanelSettingsOutlinedIcon
                sx={{ color: "#fff" }}
                fontSize="small"
              />
            ) : access === "Manager" ? (
              <SecurityOutlinedIcon fontSize="small" sx={{ color: "#fff" }} />
            ) : (
              <LockOpenOutlinedIcon fontSize="small" sx={{ color: "#fff" }} />
            )}
            <Typography sx={{ fontSize: "13px", color: "#fff" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Head title={"TEAM"} subtitle={"Managing the Team Members"} />
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}
