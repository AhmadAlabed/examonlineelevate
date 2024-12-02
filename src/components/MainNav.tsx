"use client";
import { useRouter } from "next/navigation";
import { Stack, Button } from "@mui/material";
import { signOut } from "next-auth/react";

const MainNav = () => {
  const router = useRouter();
  const signOutHandler = async () => {
    await signOut({
      redirect: false,
    });
    router.push("/");
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
          variant="outlined"
          color="primary"
          sx={{
            border: "1px solid #E0E0E9",
            boxShadow: "0px 10px 30px 0px #4461F20D",
            borderRadius: "15px",
            textTransform: "none",
          }}
          onClick={signOutHandler}
        >
          SignOut
        </Button>
      </Stack>
    </>
  );
};

export default MainNav;
