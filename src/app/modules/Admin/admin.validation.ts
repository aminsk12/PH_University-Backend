import { z } from "zod";

export const adminNameSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    middleName: z.string().optional(),
    lastName: z.string().min(1, "Last name is required"),
});


export const createAdminValidationSchema = z.object({
    body: z.object({
        admin: z.object({
            email: z.string().email("Invalid email address"),
            name: adminNameSchema,
            gender: z.enum(["male", "female", "other"]),
            contactNo: z.string().min(1, "Contact number is required"),
            emergencyContactNo: z.string().optional(),
            address: z.string().min(1, "Address is required"),
            profileImage: z.string().optional(),
            isDeleted: z.boolean().optional(), // Optional because Mongoose sets default
        })
    })
});


export const adminValidations = {
    createAdminValidationSchema
}