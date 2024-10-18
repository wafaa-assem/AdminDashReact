import { Box, Typography, useTheme } from "@mui/material";

export default function Head({ title, subtitle, isDashboard = false }) {
  const theme = useTheme();
  return (
    <Box mb={isDashboard ? 2 : 4}>
      <Typography
        variant="h5"
        sx={{ color: theme.palette.info.light, fontWeight: "bold" }}
      >
        {title}
      </Typography>
      <Typography variant="body1">{subtitle}</Typography>
    </Box>
  );
}
