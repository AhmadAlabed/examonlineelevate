import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const forgetPasswordSchema = z.object({
  email: z.string().email("Invalid email address."),
});

export const forgetPasswordResolver = zodResolver(forgetPasswordSchema);
