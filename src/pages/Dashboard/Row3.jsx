import { Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "./../Pie/Pie";
import Bar from "../Bar/Bar";
import Geography from "./../Geography/Geography";

export default function Row3() {
  const theme = useTheme();
  return (
    // stack by default ?? display:"flex"
    <Stack direction="row" gap={1.5} flexWrap={"wrap"} mt={2}>
      <Paper
        sx={{
          minWidth: "400px",
          flexGrow: 1,
          width: "28%",
        }}
      >
        <Typography
          variant="h6"
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px", fontWeight: "900" }}
        >
          Campaign
        </Typography>
        <Pie isDashboard={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,538 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper
        sx={{
          minWidth: "400px",
          flexGrow: 1,
          width: "33%",
        }}
      >
        <Typography
          variant="h6"
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px", fontWeight: "900" }}
        >
          Sales Quantity
        </Typography>
        <Bar isDashboard={true} />
      </Paper>
      <Paper
        sx={{
          minWidth: "400px",
          flexGrow: 1,
          width: "33%",
        }}
      >
        <Geography isDashboard={true} />
      </Paper>
    </Stack>
  );
}
