"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const studentNameValidationSchema = zod_1.z.object({
    firstName: zod_1.z.string().max(20, 'First name cannot be more than 20 characters'),
    middleName: zod_1.z.string().optional(),
    lastName: zod_1.z.string(),
});
const guardianValidationSchema = zod_1.z.object({
    fatherName: zod_1.z.string(),
    fatherOccupation: zod_1.z.string(),
    fatherContactNo: zod_1.z.string(),
    motherName: zod_1.z.string(),
    motherOccupation: zod_1.z.string(),
    motherContactNo: zod_1.z.string(),
});
const localGuardianValidationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    occupation: zod_1.z.string(),
    contactNo: zod_1.z.string(),
    address: zod_1.z.string(),
});
const studentValidationSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: studentNameValidationSchema,
    gender: zod_1.z.enum(['male', 'female', 'other']),
    email: zod_1.z.string().email('Invalid email format'),
    dateOfBirth: zod_1.z.string(),
    contactNo: zod_1.z.string(),
    emergencyContactNo: zod_1.z.string(),
    bloodGroup: zod_1.z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
    presentAddress: zod_1.z.string(),
    permanentAddress: zod_1.z.string(),
    guardian: guardianValidationSchema,
    localGuardian: localGuardianValidationSchema,
    profileImage: zod_1.z.string().optional(),
    status: zod_1.z.enum(['Activ', 'Bolcked']).default('Activ'),
});
exports.default = studentValidationSchema;
