import { z } from "zod";


const studentNameValidationSchema = z.object({
    firstName: z.string().max(20, 'First name cannot be more than 20 characters'),
    middleName: z.string().optional(),
    lastName: z.string(),
});

const guardianValidationSchema = z.object({
    fatherName: z.string(),
    fatherOccupation: z.string(),
    fatherContactNo: z.string(),
    motherName: z.string(),
    motherOccupation: z.string(),
    motherContactNo: z.string(),
});

const localGuardianValidationSchema = z.object({
    name: z.string(),
    occupation: z.string(),
    contactNo: z.string(),
    address: z.string(),
});

const createStudentValidationSchema = z.object({
    body: z.object({
        student: z.object({
            name: studentNameValidationSchema,
            gender: z.enum(['male', 'female', 'other']),
            email: z.string().email('Invalid email format'),
            dateOfBirth: z.string(),
            contactNo: z.string(),
            emergencyContactNo: z.string(),
            bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
            presentAddress: z.string(),
            permanentAddress: z.string(),
            guardian: guardianValidationSchema,
            localGuardian: localGuardianValidationSchema,
            admissionSemester: z.string(),
            profileImage: z.string().optional(),
        })
    })
})


export const studentValidations = {
    createStudentValidationSchema
}