"use client";
//Custom Component
import ButtonInput from "@/components/ui/ButtonInput";
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
import { forgetPasswordResolver } from "@/validations/auth/forgetPasswordSchema";
import { type TForgetPasswordDataType } from "@/types/common";
//Next js
import { forgetPasswordAction } from "@/actions/forgetPasswordAction";
//React Toastify
import { toast } from "react-toastify";
const ForgetPassword = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TForgetPasswordDataType>({
    defaultValues: {
      email: "",
    },
    resolver: forgetPasswordResolver,
  });
  const onSubmit: SubmitHandler<TForgetPasswordDataType> = async (data) => {
    console.log(data);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string);
      });
      const result = await forgetPasswordAction(formData);
      // console.log(result);
      if (result?.message !== "success") {
        toast.error(result?.message);
      } else {
        toast.success("Success:OTP sent to your email");
        router.push("/");
      }
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
          Forgot your password?
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
            text="Send"
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

export default ForgetPassword;
