import { Box, Button, Stack } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";
import Head from './../../Components/Head';
export default function Dashboard() {
  return (
    <Box>
      <Stack direction="row" justifyContent={"space-between"} alignItems={"center"}>
      <Head isDashboard={true} title={"DASHBOARD"} subtitle={"Welcome to your dashboard"} />
      <Box sx={{ textAlign: "right", mb: 1.5 }}>
        <Button variant="contained">
          <GetAppOutlinedIcon /> Download Reports
        </Button>
      </Box>
      </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
}
