import { z } from "zod";

const loginValidationSchema = z.object({
  body: z.object({
    id: z.string().min(10, "ID is required"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(20, "Password must be at least 20 characters long"),
  }),
});

export const AuthValidation = {
  loginValidationSchema,
};
