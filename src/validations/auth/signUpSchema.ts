import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpSchema = z
  .object({
    firstName: z
      .string()
      .min(3, "First Name must contain at least 3 characters."),
    lastName: z
      .string()
      .min(3, "Last Name must contain at least 3 characters."),
    email: z.string().email("Invalid email address."),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long.")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
      .regex(/\d/, "Password must contain at least one number.")
      .regex(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character."
      ),
    rePassword: z.string(),
  })
  .refine(
    (data) => {
      return data.password === data.rePassword;
    },
    {
      message: "The Confirm password must match the password.",
      path: ["rePassword"],
    }
  );
export const signUpResolver = zodResolver(signUpSchema);
