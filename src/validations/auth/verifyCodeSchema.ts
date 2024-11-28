import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const verifyCodeSchema = z.object({
  otp: z.string().min(6, { message: "OTP must be 6 digits long." }),
});
export const verifyCodeResolver = zodResolver(verifyCodeSchema);
