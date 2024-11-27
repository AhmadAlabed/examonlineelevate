//Custom Component
import ButtonInput from "@/components/ui/ButtonInput";
import PasswordInput from "@/components/ui/PasswordInput";
import TextInput from "@/components/ui/TextInput";
//MUI
import { Box, Divider, Typography } from "@mui/material";
//Icon
//
//Next
import Link from "next/link";
import AuthNav from "@/components/AuthNav";
import AuthButtons from "@/components/AuthButtons";

const SignIn = () => {
  return (
    <>
      <AuthNav />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          maxWidth: "410px",
          marginInline: "auto",
          gap: 4,
          mt: 4,
        }}
      >
        <Typography component="h3" variant="h5" sx={{ fontWeight: "700" }}>
          Sign in
        </Typography>
        <Box
          component="form"
          // action={}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
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
        <AuthButtons />
      </Box>
    </>
  );
};

export default SignIn;
