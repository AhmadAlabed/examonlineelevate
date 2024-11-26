"use client";
//MUI
import Button from "@mui/material/Button";
//React
import { ReactNode } from "react";

const ButtonSocial = ({ children }: { children: ReactNode }) => {
  return (
    <Button
      variant="contained"
      color="inherit"
      sx={{
        width: "63px",
        height: "63px",
        borderRadius: "15px",
        border: "1.02px solid #E0E0E9",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 18px 30px 0px #4461F21C",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonSocial;
