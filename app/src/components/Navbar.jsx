import { AppBar, Toolbar, styled, Typography } from "@mui/material";
import Pets from "@mui/icons-material/Pets";
import React from "react";

const StyleTdToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyleTdToolbar>
        <Typography variant="h6">LAMA DEV</Typography>
        <Pets />
      </StyleTdToolbar>
    </AppBar>
  );
};
