"use client";
import { type TLoginDataType } from "@/types/common";
//MUI
import TextField from "@mui/material/TextField";
// React Hook Form
import { FieldError, UseFormRegister } from "react-hook-form";
//type
interface ITextInputProps {
  type: string;
  variant: "filled" | "outlined" | "standard";
  placeholder: string;
  name: string;
  error?: FieldError;
  register: UseFormRegister<TLoginDataType>;
}

const TextInput = ({
  type,
  variant,
  placeholder,
  name,
  error,
  register,
}: ITextInputProps) => {
  return (
    <>
      <TextField
        variant={variant}
        placeholder={placeholder}
        type={type}
        fullWidth
        {...register(name)}
        error={!!error}
        helperText={error?.message}
        sx={{ marginBottom: 2 }}
        slotProps={{
          input: {
            sx: {
              borderRadius: "10px",
              backgroundColor: "#F9F9F9",
              boxShadow: "0px 10.09px 20.18px 0px #4461F20D",
            },
          },
        }}
      />
    </>
  );
};

export default TextInput;
