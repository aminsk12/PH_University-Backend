import mongoose from "mongoose"
import Student from "./student.modal"
import AppError from "../../errors/AppError"
import { User } from "../User/user.model"
import { TStudent } from "./student.interface"

const getAllStudentFromDB = async () => {
    const result = await Student.find().populate('admissionSemester').populate({
        path: 'academicDepartment',
        populate: {
            path: 'academicFaculty'
        }
    })
    //console.log(result);
    return result
}

const getSingleStudentFromDB = async (id: string) => {
    const result = await Student.findById(id).populate('admissionSemester').populate({
        path: 'academicDepartment',
        populate: {
            path: 'academicFaculty'
        }
    })
    console.log(result);
    return result
}


const deleteStudentFromDB = async (id: string) => {

    const session = await mongoose.startSession()
    try {
        session.startTransaction()
        const deleteStudent = await Student.findOneAndUpdate(
            { id },
            { isDeleted: true },
            { new: true, session }
        )
        if (!deleteStudent) {
            throw new AppError(400, 'Failed to delete student')
        }

        const deleteUser = await User.findOneAndUpdate(
            { id },
            { isDeleted: true },
            { new: true, session }
        )
        if (!deleteUser) {
            throw new AppError(400, 'Failed to delete student')
        }

        await session.commitTransaction();
        session.endSession();

        return deleteStudent
    } catch (err) {
        // rollback the transaction in case of error
        await session.abortTransaction();
        session.endSession();
        // handle the error
        if (err instanceof mongoose.Error) {
            throw new AppError(400, 'Database error: ' + err.message)
        }
    }


}

const updateStudentFromDB = async (id: string, paylod: Partial<TStudent>) => {


    const { name, guardian, localGuardian, ...remaning } = paylod

    const modifiedUpdatedData: Record<string, unknown> = {
        ...remaning
    }


    if (name && Object.keys(name).length) {
        for (const [key, value] of Object.entries(name)) {
            modifiedUpdatedData[`name.${key}`] = value
        }
    }
    if (guardian && Object.keys(guardian).length) {
        for (const [key, value] of Object.entries(guardian)) {
            modifiedUpdatedData[`guardian.${key}`] = value
        }
    }
    if (localGuardian && Object.keys(localGuardian).length) {
        for (const [key, value] of Object.entries(localGuardian)) {
            modifiedUpdatedData[`localGuardian.${key}`] = value
        }
    }

    const updateStudent = await Student.findOneAndUpdate(
        { id },
        modifiedUpdatedData,
        { new: true, runValidators: true }
    )

    return updateStudent

}



export const StudentServices = {
    getAllStudentFromDB,
    getSingleStudentFromDB,
    deleteStudentFromDB,
    updateStudentFromDB
}