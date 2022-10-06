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
        {pageTitle && <Typography>{pageTitle}</Typography>}
        {children}
      </Box>
    </Box>
  );
};

const sxRoot = {
  width: "fit-contents",
  minWidth: "100vw",
  height: "fit-contents",
  minHeight: "100vh",
  backgroundColor: "red",
};

const sxMain = {};
