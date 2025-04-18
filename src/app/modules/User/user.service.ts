import config from "../../config"
import { TAcademicSemister } from "../academicSemister/academicSemister.interface"
import { AcademicSemister } from "../academicSemister/academicsemister.model"
import { TStudent } from "../sudent/student.interface"
import Student from "../sudent/student.modal"
import { TUser } from "./user.interface"
import { User } from "./user.model"
import generateStudentId from "./user.ultis"
import AppError from "../../errors/AppError"
import mongoose from "mongoose"
          

const createStudenIntoDB = async (password: string, studentData: TStudent) => {
    //create a user obj
    const userData: Partial<TUser> = {};

    // if password is not given, use default password
    userData.password = password || (config.default_pass as string)
    // if (!password) {
    //     user.password = config.default_pass as string;
    // }else{
    //     user.password= password
    // }

    //set student role
    userData.role = "student"

    const admissionSemester = await AcademicSemister.findById(studentData.admissionSemester)

    const session = await mongoose.startSession();

    try {
        session.startTransaction()
        //check if the semester is valid                                
        //set auto generated ID
        userData.id = await generateStudentId(admissionSemester as TAcademicSemister)
        // set email 
        userData.email = studentData.email

        //create a user 
        const newUser = await User.create([userData], { session });
//console.log(newUser);
        //create a student
        if (!newUser.length) {
            throw new AppError(400, 'Faild to create user')
        }

        //set id ,_id as user
        studentData.id = newUser[0].id;
        studentData.user = newUser[0]._id;

        const newStudent = await Student.create([studentData], { session });
        if (!newStudent.length) {
            throw new AppError(400, 'Faild to create student')
        }
        
        // commit the transaction
        await session.commitTransaction();
        session.endSession();
        
        return newStudent

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


export const UserServices = {
    createStudenIntoDB
}