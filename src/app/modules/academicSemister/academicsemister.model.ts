import { model, Schema } from "mongoose";
import { TAcademicSemister, TMonths } from "./academicSemister.interface";



const months: TMonths[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] as const

const academicSemisterSchema = new Schema<TAcademicSemister>({
    name: {
        type: String,
        enum: ["Autumn", "Summer", "Fall"],
        required: true,
    },
    code: {
        type: String,
        enum: ["01", "02", "03"],
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    startMonth: {
        type: String,
        enum: months,
        required: true,
    },
    endMonth: {
        type: String,
        enum: months,
        required: true,
    }

},
    {
        timestamps: true,

    }
)

academicSemisterSchema.pre('save', async function(next){
    const isSemisterExit = await AcademicSemister.findOne({
        year: this.year,
        name: this.name,
    })

    if (isSemisterExit) {
        throw new Error("Academic Semister already exists")
    }
    next()
})



export const AcademicSemister = model<TAcademicSemister>("AcademicSemister", academicSemisterSchema)