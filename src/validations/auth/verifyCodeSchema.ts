import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const verifyCodeSchema = z.object({
  otp: z.string().regex(/^\d{6}$/, "The string must contain exactly 6 digits."),
});
export const verifyCodeResolver = zodResolver(verifyCodeSchema);
