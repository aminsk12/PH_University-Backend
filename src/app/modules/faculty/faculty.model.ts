import { model, Schema } from "mongoose";
import { TFaculty, TFacultyName } from "./faculty.interface";



const facultyNameSchema = new Schema<TFacultyName>({
    firstName: {
        type: String,
        requard: true,
    },
    middleName: String,
    lastName: {
        type: String,
        requard: true
    },

})

const facultySchema = new Schema<TFaculty>({
    id: {
        type: String,
        requard: true,
        unique: true
    },
    email: {
        type: String,
        requird: true,
        unoque: true
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    name: facultyNameSchema,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    dateOfBirth: {
        type: String,
        optional:true

    }, contactNo: {
        type: String,
        requard: true
    },
    emergencyContactNo: {
        type: String,
        optional: true
    },
    presentAddress: {
        type: String,
        requird: true
    },
    permanentAddress: {
        type: String,
        requird: true
    },
    profileImage: {
        type: String,
        optional: true
    },
    academicDepartment: {
        type: Schema.Types.ObjectId,
        optional: true,
        ref: "AcademicDepartment"
    },
    academicFaculty: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "AcademicFaculty"
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
},
    {
        timestamps: true,
    }
)

export const Faculty = model<TFaculty>('Faculty', facultySchema)