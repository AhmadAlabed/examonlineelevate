"use client";
//MUI
import { Stack } from "@mui/material";
import ButtonSocial from "./ui/ButtonSocial";
//Icon
import GitHubIcon from "@mui/icons-material/GitHub";
const AuthButtons = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="center"
    >
      <ButtonSocial>
        <GitHubIcon />
      </ButtonSocial>
      <ButtonSocial>
        <GitHubIcon />
      </ButtonSocial>
      <ButtonSocial>
        <GitHubIcon />
      </ButtonSocial>
      <ButtonSocial>
        <GitHubIcon />
      </ButtonSocial>
    </Stack>
  );
};

export default AuthButtons;
