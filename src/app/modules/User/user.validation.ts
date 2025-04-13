import { z } from "zod";

const userValidationSchema = z.object({
    password: z.string().max(20, { message: "password can't be more than 20 characters" }),
});

export const userValidations = {
    userValidationSchema
}