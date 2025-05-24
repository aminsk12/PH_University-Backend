import { model, Schema } from "mongoose";
import { TAdmin, TAdminName } from "./admin.interface";



const adminNameSchema = new Schema<TAdminName>({
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

const adminSchema = new Schema<TAdmin>({
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
    name: adminNameSchema,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
     contactNo: {
        type: String,
        requard: true
    },
    emergencyContactNo: {
        type: String,
        optional: true
    },
   
    profileImage: {
        type: String,
        optional: true
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

export const Admin = model<TAdmin>('Admin', adminSchema)