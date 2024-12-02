"use client";
//MUI
import {
  Stack,
  Button,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
// Next.js
import Link from "next/link";
import { useState } from "react";
const AuthNav = () => {
  const [language, setLanguage] = useState<"English" | "Arabic">("English");
  const [open, setOpen] = useState(false);
  const handleChange = (event: SelectChangeEvent<"English" | "Arabic">) => {
    setLanguage(event.target.value as "English" | "Arabic");
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Stack
        component="nav"
        direction="row-reverse"
        spacing={3}
        paddingInlineEnd="60px"
      >
        <Button
          component={Link}
          href="/auth/sign-up"
          variant="outlined"
          color="primary"
          sx={{
            border: "1px solid #E0E0E9",
            boxShadow: "0px 10px 30px 0px #4461F20D",
            borderRadius: "15px",
            textTransform: "none",
          }}
        >
          Register
        </Button>
        <Button
          component={Link}
          href="/auth/sign-in"
          variant="text"
          color="primary"
          sx={{ fontWeight: "700", textTransform: "none" }}
        >
          Sign in
        </Button>
        <Select
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={language}
          onChange={handleChange}
          variant="standard"
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Arabic">Arabic</MenuItem>
        </Select>
      </Stack>
    </>
  );
};

export default AuthNav;
