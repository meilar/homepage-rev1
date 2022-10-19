import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { TopMenu } from "./TopMenu";

interface MainLayoutProps {
  pageTitle?: string;
  children?: JSX.Element | JSX.Element[];
}

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { pageTitle, children } = props;
  return (
    <Box sx={sxRoot}>
      <TopMenu />
      <Box sx={sxMain}>
        {pageTitle && <Typography variant="h3">{pageTitle}</Typography>}
        <Box sx={{ height: "1em" }} />
        {children}
      </Box>
    </Box>
  );
};

const sxRoot = {
  height: "100vh",
  width: "100vw",
  margin: 0,
  padding: 0,
};

const sxMain = {
  margin: "4em",
};
