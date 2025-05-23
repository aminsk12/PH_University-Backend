import { Types } from "mongoose";

export type TStudentName = {
    firstName: string;
    middleName?: string
    lastName: string
}

export type TGuardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
};

export type TLocalGuardian = {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
}

export type TStudent = {
    id: string
    user: Types.ObjectId
    name: TStudentName;
    gender: "male" | "female"|"other";
    email: string;
    dateOfBirth: string
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    presentAddress: string;
    permanentAddress: string;
    guardian: TGuardian;
    localGuardian: TLocalGuardian
    academicDepartment: Types.ObjectId,
    admissionSemester:Types.ObjectId
    profileImage?:string
    isDeleted:boolean

}