import { model, Schema } from "mongoose";
import { TCourse, TPreRequisiteCourses } from "./course.interface";


const preRequisiteCourseSchema = new Schema<TPreRequisiteCourses>({
    course: {
        type: Schema.Types.ObjectId,
        ref: "Course"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})

const courseSchema = new Schema<TCourse>({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    prefix: {
        type: String,
        required: true,
    },
    code: {
        type: Number,
        required: true,
    },
    credits: {
        type: Number,
        required: true
    },
    preRequisiteCourses: [preRequisiteCourseSchema],
    isDeleted: {
        type: Boolean,
        default: false
    },
},
    {
        timestamps: true
    }
)

export const Course =  model<TCourse>('Course', courseSchema);