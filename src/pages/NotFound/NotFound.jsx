import { Box, Typography, useTheme } from "@mui/material";

export default function NotFound() {
  const theme = useTheme();
  return (
    <Box>
      <Typography color={theme.palette.error.main} variant="h5" align="center">
        There is no design yet
        <br />
        <br />
        Please try again later ...
      </Typography>
    </Box>
  );
}
