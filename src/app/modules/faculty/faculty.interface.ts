import { Types } from "mongoose";


export type TFacultyName={
    firstName: string;
    middleName?: string;
    lastName: string;

}
export type TFaculty = {
    id: string;
    email: string;
    user: Types.ObjectId;
    name: TFacultyName;
    gender: "male" | "female"|"other";
    dateOfBirth: string;
    contactNo: string;
    emergencyContactNo?: string;
    presentAddress: string;
    permanentAddress: string;
    profileImage: string;
    academicFaculty: Types.ObjectId;
    academicDepartment: Types.ObjectId;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}