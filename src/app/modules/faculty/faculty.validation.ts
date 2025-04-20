import { z } from "zod";

export const facultyNameSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    middleName: z.string().optional(),
    lastName: z.string().min(1, "Last name is required"),
});


export const createFacultyValidationSchema = z.object({
    body: z.object({
        faculty: z.object({
            email: z.string().email("Invalid email address"),
            name: facultyNameSchema,
            gender: z.enum(["male", "female", "other"]),
            dateOfBirth: z.string().optional(),
            contactNo: z.string().min(1, "Contact number is required"),
            emergencyContactNo: z.string().optional(),
            address: z.string().min(1, "Address is required"),
            profileImage: z.string().optional(),
            isDeleted: z.boolean().optional(), // Optional because Mongoose sets default
        })
    })
});


export const facultyValidations = {
    createFacultyValidationSchema
}