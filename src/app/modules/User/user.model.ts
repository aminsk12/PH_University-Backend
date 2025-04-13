import {  model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
    id: {
        type: String,
        required: true
    },
    passward: {
        type: String,
        required: true
    },
    needsPasswordChange: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        enum: ["student", "faculty", "admin"]
    },
    status: {
        type: String,
        enum: ["Activ", "Bolcked"]
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    }
)

export const User = model<TUser>('User', userSchema)