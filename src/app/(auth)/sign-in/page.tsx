"use client";
//Custom Component
import ButtonInput from "@/components/ui/ButtonInput";
import PasswordInput from "@/components/ui/PasswordInput";
import TextInput from "@/components/ui/TextInput";
import AuthNav from "@/components/AuthNav";
import AuthButtons from "@/components/AuthButtons";
//MUI
import { Box, Divider, Typography } from "@mui/material";
//Icon
//
// Next.js
import Link from "next/link";
import { useRouter } from "next/navigation";
// React Hook Form
import { useForm, SubmitHandler } from "react-hook-form";
// Validation Schema
import { signInResolver } from "@/validations/auth/signInSchema";
import { type TSigninDataType } from "@/types/common";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
const SignIn = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSigninDataType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: signInResolver,
  });
  const onSubmit: SubmitHandler<TSigninDataType> = async (data) => {
    console.log(data);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      if (res?.error) {
        console.error("Login error:", res.error);
        toast.error(res.error);
      } else {
        toast.success("Login successful");
        router.push("/");
      }
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
          Sign in
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
            placeholder="Enter Email"
            error={errors.email}
            type="text"
            variant="outlined"
          />
          <PasswordInput
            variant="outlined"
            placeholder="Password"
            name="password"
            register={register}
            error={errors.password}
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
            type="submit"
            text="Sign in"
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

export default SignIn;
