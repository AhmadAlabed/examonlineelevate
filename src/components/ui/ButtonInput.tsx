"use client";
//MUI
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
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
          sx={{
            marginBottom: 1,
            width: "100%",
            borderRadius: "20px",
            padding: "8px",
            boxShadow: "0px 18px 30px 0px #2F1C1C1A",
            minHeight: "56px",
          }}
          disabled={pending}
        >
          {text}
        </Button>
        {pending && (
          <CircularProgress
            size={24}
            color="primary"
            sx={{
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
