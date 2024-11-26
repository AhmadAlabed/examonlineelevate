"use client";
//MUI
import TextField from "@mui/material/TextField";
//type
interface ITextInputProps {
  type: string;
  variant: "filled" | "outlined" | "standard";
  placeholder: string;
  name: string;
  error: string;
  defaultValue: string;
}

const TextInput = ({
  type,
  variant,
  placeholder,
  name,
  error,
  defaultValue,
}: ITextInputProps) => {
  return (
    <>
      <TextField
        variant={variant}
        placeholder={placeholder}
        type={type}
        name={name}
        fullWidth
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
          },
        }}
      />
    </>
  );
};

export default TextInput;
