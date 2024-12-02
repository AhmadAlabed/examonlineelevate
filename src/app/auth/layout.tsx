import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";

export default function layout({ children }: { children: React.ReactNode }) {
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
            padding: "60px 0 0 60px",
          }}
        >
          <Box sx={{ maxWidth: "482px" }}>
            <Typography
              component="h3"
              variant="h4"
              sx={{ fontWeight: "700", marginBottom: "10px" }}
            >
              Welcome to
            </Typography>
            <Typography
              component="h2"
              variant="h4"
              color="#122D9C"
              sx={{ fontWeight: "700", marginBottom: "10px" }}
            >
              Elevate
            </Typography>
            <Typography component="p" variant="body2" maxWidth={"380px"}>
              Quidem autem voluptatibus qui quaerat aspernatur architecto natus
            </Typography>
            <Image alt="" src="/bro.png" width="400" height="434" />
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ paddingTop: "60px" }}>
          {children}
        </Grid2>
      </Grid2>
    </>
  );
}
