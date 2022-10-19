import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface MenuItemProps {
  label: string;
  destination: string;
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { label, destination } = props;
  const navigate = useNavigate();

  const [active, setActive] = useState<Boolean>(false);

  const handleLinkClick = () => {
    navigate(destination);
  };

  useEffect(() => {
    if (window.location.pathname === destination) {
      setActive(true);
    }
  }, []);

  return (
    <Box sx={sxRoot}>
      <Box sx={{ width: "20px" }}>{active && <KeyboardArrowRightIcon />}</Box>
      <Typography
        sx={{
          "&:hover": {
            textDecoration: "underline",
            cursor: "pointer",
          },
        }}
        variant="h6"
        onClick={handleLinkClick}
      >
        {label}
      </Typography>
    </Box>
  );
};

const sxRoot = {
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  paddingLeft: "1rem",
};
