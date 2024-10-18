import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import LineChart from "./../Line/LineChart";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";
import { transactions } from "./data";

export default function Row2() {
  const theme = useTheme();
  return (
    <Stack direction="row" flexWrap={"wrap"} gap={1.5} mt={2}>
      <Paper
        sx={{
          maxWidth: "900px",
          minWidth: "400px",
          flexGrow: 1,
        }}
      >
        {/* send property =>  */}
        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              fontWeight={"bold"}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342,32
            </Typography>
          </Box>
          <Box>
            <IconButton mr={3}>
              <GetAppOutlinedIcon />
            </IconButton>
          </Box>
        </Stack>
        <LineChart isDashboard={true} />
      </Paper>

      <Box
        sx={{
          minWidth: "250",
          maxHeight: "450px",
          overflow: "auto",
          flexGrow: 1,
        }}
      >
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>

        {transactions.map((item) => {
          return (
            <Paper
              key={item.txtId}
              sx={{
                mt: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box p={1.2}>
                <Typography varient="body1" fontWeight={"600px"}>
                  {item.txtId}{" "}
                </Typography>
                <Typography varient="body2">{item.user} </Typography>
              </Box>
              <Typography varient="body1">{item.date}</Typography>
              <Typography
                varient="body2"
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
              >
                ${item.cost}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
}
