"use client";
//MUI
import { InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
//React
import { MouseEvent, useState } from "react";
//type
interface IPasswordInputProps {
  variant: "filled" | "outlined" | "standard";
  name: string;
  error: string;
  defaultValue: string;
}
const PasswordInput = ({
  variant,
  name,
  error,
  defaultValue,
}: IPasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: MouseEvent) => {
    event.preventDefault();
  };
  return (
    <>
      <TextField
        variant={variant}
        type={showPassword ? "text" : "password"}
        name={name}
        fullWidth
        placeholder="Password"
        defaultValue={defaultValue}
        error={!!error}
        helperText={error}
        sx={{ marginBottom: 2 }}
        slotProps={{
          input: {
            sx: {
              borderRadius: "10px",
              backgroundColor: "#F9F9F9",
              boxShadow: "0px 10.09px 20.18px 0px #4461F20D",
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </>
  );
};

export default PasswordInput;
