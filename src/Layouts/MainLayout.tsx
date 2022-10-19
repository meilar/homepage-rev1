import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { TopMenu } from "./TopMenu";

interface MainLayoutProps {
  pageTitle?: string;
  children?: JSX.Element | JSX.Element[];
}

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { pageTitle, children } = props;
  return (
    <Box className="LayoutRoot" sx={sxRoot}>
      <TopMenu />
      <Box sx={sxInner}>
        <Sidebar />
        <Box sx={sxContent}>
          {pageTitle && <Typography variant="h3">{pageTitle}</Typography>}
          <Box sx={{ height: "1em", minHeight: "100%" }} />
          {children}
        </Box>
      </Box>
    </Box>
  );
};

const sxRoot = {
  position: "fixed",
  height: "100vh",
  width: "100vw",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
};

const sxInner = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
};

const sxContent = { paddingLeft: "4em", paddingTop: "4em", overflow: "scroll" };
