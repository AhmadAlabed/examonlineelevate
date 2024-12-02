"use client";
//Custom Component
import ButtonInput from "@/components/ui/ButtonInput";
import AuthNav from "@/components/AuthNav";
import AuthButtons from "@/components/AuthButtons";
//MUI
import { Box, Divider, Typography } from "@mui/material";
//Icon
//
// Next.js
// import Link from "next/link";
import { useRouter } from "next/navigation";
// React Hook Form
import { useForm, SubmitHandler } from "react-hook-form";
// Validation Schema
import { setPasswordResolver } from "@/validations/auth/setPasswordSchema";
import { type TSetPasswordDataType } from "@/types/common";
//Next js
import { setPasswordAction } from "@/actions/setPasswordAction";
//React Toastify
import { toast } from "react-toastify";
import PasswordInput from "@/components/ui/PasswordInput";
const SetPassword = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSetPasswordDataType>({
    defaultValues: {
      password: "",
      rePassword: "",
    },
    resolver: setPasswordResolver,
  });
  const onSubmit: SubmitHandler<TSetPasswordDataType> = async (data) => {
    console.log(data);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string);
      });
      const result = await setPasswordAction(formData);
      // // console.log(result);
      if (result?.message !== "success") {
        toast.error(result?.message);
      } else {
        toast.success(
          "Your password was reset successfully, please sign in to continue."
        );
        router.push("/auth/sign-in");
      }
    } catch (error) {
      toast.error("An unexpected error occurred while setting a new password.");
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
          Set a Password?
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

          <ButtonInput
            type="submit"
            text="reset"
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

export default SetPassword;
