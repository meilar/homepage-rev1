import { Box, IconButton, Paper, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { MenuItem } from "../Components/MenuItem";

export const TopMenu = () => {
  const navigate = useNavigate();
  const handleHomeButton = () => {
    navigate("/");
  };
  return (
    <Paper className="TopMenuRoot" square elevation={10} sx={sxRoot}>
      <>
        <Box sx={sxMenu}>
          <Box>
            <IconButton onClick={handleHomeButton}>
              <HomeIcon />
            </IconButton>
          </Box>
          <Box sx={{ ml: "2em" }}>
            <Typography variant="h5">Matthew Eilar</Typography>
          </Box>
          <Box
            sx={{
              display: "inline-flex",
              flexDirection: "row",
              ml: "2em",
              alignItems: "center",
            }}
          >
            <MenuItem label="Biography" destination="/biography" />
            <MenuItem label="Resume" destination="/resume" />
            <MenuItem label="Projects" destination="/projects" />
            <MenuItem label="Other Work" destination="/work" />
            <MenuItem label="Contact" destination="/contact" />
          </Box>
        </Box>
      </>
    </Paper>
  );
};

const sxRoot = {
  height: "10%",
  width: "100vw",
  backgroundColor: "#a3b18a",
  overflow: "hidden",
};

const sxMenu = {
  paddingTop: "1em",
  ml: "2em",
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
};
