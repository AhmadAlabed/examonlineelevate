"use server";
import { type TAPIUserInfo } from "@/types/common";
export const signUpAction = async (
  formData: FormData
): Promise<TAPIUserInfo> => {
  const formDataObj = {
    username: formData.get("email") as string, //username = email
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    rePassword: formData.get("rePassword") as string,
    phone: "01012345678", // Default : 01012345678
  };
  const res = await fetch(`${process.env.API_URL}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(formDataObj),
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};
