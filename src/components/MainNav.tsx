"use client";
import { useRouter } from "next/navigation";
import { Button, AppBar, Box, Toolbar, Typography } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Link from "next/link";

const MainNav = () => {
  const { data, status } = useSession();
  const router = useRouter();
  const signOutHandler = async () => {
    await signOut({
      redirect: false,
    });
    router.push("/");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ELEVATE
            </Typography>
            {status === "loading" ? (
              <RestartAltIcon className="animate-spin" />
            ) : data ? (
              <>
                <Button color="inherit" onClick={signOutHandler}>
                  Sign Out
                </Button>
                <Button color="inherit">
                  <Link href="/profile/dashboard">Profile</Link>
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit">
                  <Link href="/auth/sign-in">Sign In</Link>
                </Button>
                <Button color="inherit">
                  <Link href="/auth/sign-up">register</Link>
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default MainNav;
