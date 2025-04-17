import { model, Schema } from "mongoose";
import { TAcademicDepartment } from "./academicDepertment.interface";


const academicDepartmentSchema = new Schema<TAcademicDepartment>({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    academicFaculty: {
        type: Schema.Types.ObjectId,
        ref: 'AcademicFaculty',
        required: true,
    }
},
    {
        timestamps: true,
    }
)

academicDepartmentSchema.pre('save', async function (next) {
    const isDepertmeantExit = await AcademicDepartment.findOne(
        {
            name: this.name
        }
    )
    if (isDepertmeantExit) {
        throw new Error('Academic Depertment already exist')
    }
    next()

})

academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
    const query = this.getQuery()

    const isDepertmeantExit = await AcademicDepartment.findOne(query)

    if (!isDepertmeantExit) {
        throw new Error("This Academic Depertment don't exist")
    }
    next()

})


export const AcademicDepartment = model<TAcademicDepartment>('AcademicDepartment', academicDepartmentSchema)
