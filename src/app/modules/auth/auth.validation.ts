import { z } from "zod";

const loginValidationSchema = z.object({
  body: z.object({
    id: z.string().min(10, "ID is required"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  }),
});

export const AuthValidation = {
  loginValidationSchema,
};
