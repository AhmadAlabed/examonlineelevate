//Custom Component
import ButtonInput from "@/components/ui/ButtonInput";
import ButtonSocial from "@/components/ui/ButtonSocial";
import PasswordInput from "@/components/ui/PasswordInput";
import TextInput from "@/components/ui/TextInput";
//MUI
import { Box, Divider, Grid2, Stack, Typography } from "@mui/material";
//Icon
import GitHubIcon from "@mui/icons-material/GitHub";
//Next
import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
  return (
    <>
      <Grid2 container sx={{ minHeight: "100vh" }}>
        <Grid2
          size={{ xs: 0, md: 6 }}
          sx={{
            display: { xs: "none", md: "block" },
            backgroundColor: "#F0F4FC",
            boxShadow: "0px 5px 100px 0px #0000001A",
            borderRadius: " 0px 100px 100px 0px",
          }}
        >
          <Typography component="h3" variant="h4">
            Welcome to
          </Typography>
          <Typography component="h2" variant="h4" color="#122D9C">
            Elevate
          </Typography>
          <Typography component="p" variant="body2">
            Quidem autem voluptatibus qui quaerat aspernatur architecto natus
          </Typography>
          <Image alt="" src="/bro.png" width="408" height="434" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              maxWidth: "410px",
            }}
          >
            <Typography component="h3" variant="h4">
              Sign in
            </Typography>
            <Box
              component="form"
              // action={}
            >
              <TextInput
                name="email"
                defaultValue=""
                placeholder="Enter Email"
                error=""
                type="text"
                variant="outlined"
              />
              <PasswordInput
                variant="outlined"
                name="password"
                defaultValue=""
                error=""
              />
              <Link href="/">
                <Typography
                  color="primary"
                  sx={{
                    textAlign: "end",
                    fontWeight: "400",
                  }}
                >
                  Recover Password ?
                </Typography>
              </Link>

              <ButtonInput
                pending={false}
                type="submit"
                text="Sign in"
                variant="contained"
              />
            </Box>

            <Divider>Or Continue with</Divider>
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
            </Stack>
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
};

export default SignIn;
