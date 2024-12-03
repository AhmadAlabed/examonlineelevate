"use client";
//Custom Component
import ButtonInput from "@/components/ui/ButtonInput";
import PasswordInput from "@/components/ui/PasswordInput";
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
import { signUpResolver } from "@/validations/auth/signUpSchema";
import { type TSignUpDataType } from "@/types/common";
import { signUpAction } from "@/actions/signUpAction";
import { toast } from "react-toastify";

const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSignUpDataType>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: signUpResolver,
  });
  const onSubmit: SubmitHandler<TSignUpDataType> = async (data) => {
    // console.log(data);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string);
      });
      const result = await signUpAction(formData);
      // const result = await signUpAction(JSON.stringify(data));
      // console.log(result);
      if (result?.message !== "success") {
        toast.error(result?.message);
      } else {
        toast.success(
          "Your account was created successfully please sign in to continue."
        );
        router.push("/auth/sign-in");
      }
    } catch (error) {
      toast.error("An unexpected error occurred during sign-up");
      console.error(error);
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
          Sign up
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
            name="firstName"
            register={register}
            placeholder="First Name"
            error={errors.firstName}
            type="text"
            variant="outlined"
          />
          <TextInput
            name="lastName"
            register={register}
            placeholder="Last Name"
            error={errors.lastName}
            type="text"
            variant="outlined"
          />
          <TextInput
            name="email"
            register={register}
            placeholder="Email"
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
          <PasswordInput
            variant="outlined"
            placeholder="Confirm Password"
            name="rePassword"
            register={register}
            error={errors.rePassword}
          />
          <Stack direction="row" spacing={1} justifyContent="center">
            <Typography>Already have an account?</Typography>

            <Link href="/auth/sign-in">
              <Typography color="primary">Login</Typography>
            </Link>
          </Stack>

          <ButtonInput
            type="submit"
            text="Create Account"
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

export default SignUp;
