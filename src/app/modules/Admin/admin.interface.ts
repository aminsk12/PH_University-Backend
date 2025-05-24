import { Types } from "mongoose";


export type TAdminName={
    firstName: string;
    middleName?: string;
    lastName: string;

}
export type TAdmin = {
    id: string;
    email: string;
    user: Types.ObjectId;
    name: TAdminName;
    gender: "male" | "female"|"other";
    contactNo: string;
    emergencyContactNo?: string;
    profileImage: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}