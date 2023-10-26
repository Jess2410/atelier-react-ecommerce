import { FC, useState } from "react";

import { Box } from "@mui/material";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Layout: FC = ({ children }) => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
