"use client";
//Custom Component
import ButtonInput from "@/components/ui/ButtonInput";
import TextInput from "@/components/ui/TextInput";
import AuthNav from "@/components/AuthNav";
import AuthButtons from "@/components/AuthButtons";
//MUI
import { Box, Divider, Stack, Typography } from "@mui/material";
//Icon
//
// Next.js
import Link from "next/link";
import { useRouter } from "next/navigation";
// React Hook Form
import { useForm, SubmitHandler } from "react-hook-form";
// Validation Schema
import { verifyCodeResolver } from "@/validations/auth/verifyCodeSchema";
import { type TVerifyCodeDataType } from "@/types/common";
import { toast } from "react-toastify";
const VerifyCode = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TVerifyCodeDataType>({
    defaultValues: {
      otp: "",
    },
    resolver: verifyCodeResolver,
  });
  const onSubmit: SubmitHandler<TVerifyCodeDataType> = async (data) => {
    console.log(data);
    try {
      // const formData = new FormData();
      // Object.entries(data).forEach(([key, value]) => {
      //   formData.append(key, value as string);
      // });
      // const result = await signUpAction(formData);
      // // console.log(result);
      // if (result?.message !== "success") {
      //   toast.error(result?.message);
      // } else {
      //   toast.success("success");
      //   router.push("/sign-in");
      // }
      //TODO
    } catch (error) {
      console.error(error);
      //TODO
    }
  };
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
          mb: 4,
        }}
      >
        <Typography component="h3" variant="h5" sx={{ fontWeight: "700" }}>
          Verify code
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <TextInput
            name="email"
            register={register}
            placeholder="Enter code"
            error={errors.otp}
            type="text"
            variant="outlined"
          />

          <Stack direction="row" spacing={1} justifyContent="end">
            <Typography>Didn’t receive a code? </Typography>

            <Link href="/forget-password">
              <Typography color="primary">Resend</Typography>
            </Link>
          </Stack>

          <ButtonInput
            type="submit"
            text="Verify"
            variant="contained"
            pending={isSubmitting}
          />
        </Box>

        <Divider>Or Continue with</Divider>
        <AuthButtons />
      </Box>
    </>
  );
};

export default VerifyCode;
