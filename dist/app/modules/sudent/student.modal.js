"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const studentNameSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        maxlength: [20, 'First name cannot be more than 20 characters'],
    },
    middleName: { type: String },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
    },
});
const GuardianSchema = new mongoose_1.Schema({
    fatherName: {
        type: String,
        required: [true, 'Father name is required'],
    },
    fatherOccupation: {
        type: String,
        required: [true, 'Father occupation is required'],
    },
    fatherContactNo: {
        type: String,
        required: [true, 'Father contact number is required'],
    },
    motherName: {
        type: String,
        required: [true, 'Mother name is required'],
    },
    motherOccupation: {
        type: String,
        required: [true, 'Mother occupation is required'],
    },
    motherContactNo: {
        type: String,
        required: [true, 'Mother contact number is required'],
    },
});
const LocalGuardianSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Local guardian name is required'],
    },
    occupation: {
        type: String,
        required: [true, 'Local guardian occupation is required'],
    },
    contactNo: {
        type: String,
        required: [true, 'Local guardian contact number is required'],
    },
    address: {
        type: String,
        required: [true, 'Local guardian address is required'],
    },
});
const studentSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: [true, 'Student ID is required'],
        unique: true,
    },
    name: {
        type: studentNameSchema,
        required: [true, 'Student name is required'],
    },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female', 'other'],
            message: '{VALUE} is not supported',
        },
        required: [true, 'Gender is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    dateOfBirth: {
        type: String,
        required: [true, 'Date of birth is required'],
    },
    contactNo: {
        type: String,
        required: [true, 'Contact number is required'], // fixed "requird"
    },
    emergencyContactNo: {
        type: String,
        required: [true, 'Emergency contact number is required'],
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    presentAddress: {
        type: String,
        required: [true, 'Present address is required'],
    },
    permanentAddress: {
        type: String,
        required: [true, 'Permanent address is required'],
    },
    guardian: {
        type: GuardianSchema,
        required: [true, 'Guardian information is required'],
    },
    localGuardian: {
        type: LocalGuardianSchema,
        required: [true, 'Local guardian information is required'],
    },
    profileImage: { type: String },
    status: {
        type: String,
        enum: {
            values: ['Activ', 'Bolcked'], // kept original values as per your need
            message: '{VALUE} is not a valid status',
        },
        default: 'Activ',
        required: [true, 'Status is required'],
    },
}, {
    timestamps: true,
});
const Student = (0, mongoose_1.model)('Student', studentSchema);
exports.default = Student;
