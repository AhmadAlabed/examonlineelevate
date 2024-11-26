"use client";
//MUI
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { deepOrange } from "@mui/material/colors";
//type
interface IButtonProps {
  type: "submit" | "button" | "reset";
  variant: "text" | "contained" | "outlined";
  text: string;
  pending: boolean;
}
const ButtonInput = ({ variant, type, text, pending }: IButtonProps) => {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Button
          type={type}
          variant={variant}
          sx={{ marginBottom: 1, width: "100%" }}
          disabled={pending}
        >
          {text}
        </Button>
        {pending && (
          <CircularProgress
            size={24}
            sx={{
              color: deepOrange[500],
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-16px",
              marginLeft: "-12px",
            }}
          />
        )}
      </Box>
    </>
  );
};

export default ButtonInput;
