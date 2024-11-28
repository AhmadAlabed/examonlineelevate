"use server";
import { type TForgetPasswordDataType } from "@/types/common";
export const forgetPasswordAction = async (
  formData: FormData
): Promise<TForgetPasswordDataType> => {
  const formDataObj = {
    email: formData.get("email") as string,
  };
  const res = await fetch(`${process.env.API_URL}/auth/forgotPassword`, {
    method: "POST",
    body: JSON.stringify(formDataObj),
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};
