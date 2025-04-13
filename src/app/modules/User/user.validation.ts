import { z } from "zod";

const userValidationSchema = z.object({
    password: z.string({
        invalid_type_error: 'Password must be string',
        required_error: 'Password is requird'
    }).max(20, { message: "password can't be more than 20 characters" }),
});

export const userValidations = {
    userValidationSchema
}