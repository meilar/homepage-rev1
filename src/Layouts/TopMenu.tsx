import { Box, Typography } from "@mui/material";

export const TopMenu = () => {
  return (
    <Box sx={sxRoot}>
      <Typography>Top Bar</Typography>
    </Box>
  );
};

const sxRoot = {
  height: "12%",
  width: "100%",
};
