import { model, Schema } from "mongoose";
import { TAcademicFaculty } from "./academicFaculty.interface";

const academicFacultySchema = new Schema<TAcademicFaculty>({
    name: {
        type: String,
        required: true,
        unique: true,
    }
},
    {
        timestamps: true,

    }
)

academicFacultySchema.pre('save', async function(next){
    const isExitAcademicFaculty = await AcademicFaculty.findOne({ name: this.name })
    if (isExitAcademicFaculty) {
        throw new Error('Academic Faculty already exists!')
    }
    next()
})


export const AcademicFaculty = model<TAcademicFaculty>('AcademicFaculty', academicFacultySchema)