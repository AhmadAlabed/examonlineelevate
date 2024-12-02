"use server";
import { type TAPIStatus } from "@/types/common";
export const verifyCodeAction = async (
  formData: FormData
): Promise<TAPIStatus> => {
  const formDataObj = {
    resetCode: formData.get("otp") as string,
  };
  const res = await fetch(`${process.env.API_URL}/auth/verifyResetCode`, {
    method: "POST",
    body: JSON.stringify(formDataObj),
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};
