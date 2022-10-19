import { Box } from "@mui/material";

export const Sidebar = () => {
  return <Box sx={sxRoot}></Box>;
};

const sxRoot = {
  width: "15vw",
  minWidth: "250px",
  height: "100%",
  borderRight: "1px solid gray",
};
