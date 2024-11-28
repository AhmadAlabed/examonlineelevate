"use server";
import { type TSignUpDataType } from "@/types/common";
export const signUpAction = async (
  formData: FormData
): Promise<TSignUpDataType> => {
  const formDataObj = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    rePassword: formData.get("rePassword") as string,
  };
  console.log("createSignUpAction|||", formDataObj);
  return formDataObj;
};
