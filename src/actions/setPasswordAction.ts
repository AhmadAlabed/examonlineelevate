"use server";
import { type TAPIRestStatus } from "@/types/common";
export const setPasswordAction = async (
  formData: FormData
): Promise<TAPIRestStatus> => {
  const formDataObj = {
    email: formData.get("email") as string,
    newPassword: formData.get("password") as string,
  };
  const res = await fetch(`${process.env.API_URL}/auth/resetPassword`, {
    method: "PUT",
    body: JSON.stringify(formDataObj),
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};
