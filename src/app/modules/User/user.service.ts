import config from "../../config"
import { TAcademicSemister } from "../academicSemister/academicSemister.interface"
import { AcademicSemister } from "../academicSemister/academicsemister.model"
import { TStudent } from "../sudent/student.interface"
import Student from "../sudent/student.modal"
import { TUser } from "./user.interface"
import { User } from "./user.model"
import generateStudentId, { UserUltis } from "./user.ultis"
import AppError from "../../errors/AppError"
import mongoose from "mongoose"
import { TFaculty } from "../faculty/faculty.interface"
import { Faculty } from "../faculty/faculty.model"
import { TAdmin } from "../Admin/admin.interface"
import { Admin } from "../Admin/admin.model"


const createStudenIntoDB = async (password: string, studentData: TStudent) => {
    //create a user obj
    const userData: Partial<TUser> = {};

    // if password is not given, use default password
    userData.password = password || (config.default_pass as string)

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
        await session.abortTransaction();
        session.endSession();
        if (err instanceof mongoose.Error) {
            throw new AppError(400, 'Database error: ' + err.message)
        } else {
            throw new AppError(500, 'Something went wrong: ' + (err as Error).message)
        }
    }

}


const createFacultyIntuDB = async (password: string, facultyData: TFaculty) => {

    const session = await mongoose.startSession();

    try {
        session.startTransaction()
        const userData: Partial<TUser> = {}
        const facultyId = await UserUltis.generateFacultyId();



        userData.password = password || (config.default_pass as string);
        userData.role = "faculty"
        userData.email = facultyData.email;
        userData.id = facultyId

        const newUser = await User.create([userData], { session });
       console.log(userData);
        if (!newUser.length) {
            throw new AppError(400, 'Faild to create user')
        }
        //set id ,_id as user
        facultyData.id = newUser[0].id;
        facultyData.user = newUser[0]._id
        //create a faculty



        const newFaculty = await Faculty.create([facultyData], { session });
        console.log(newFaculty);
        if (!newFaculty.length) {
            throw new AppError(400, 'Faild to create faculty')
        }
        

        // commit the transaction
        await session.commitTransaction();
        session.endSession();

        return newFaculty

    } catch (err) {
        await session.abortTransaction();
        session.endSession();
        if (err instanceof mongoose.Error) {
            throw new AppError(400, 'Database error: ' + err.message)
        } else {
            throw new AppError(500, 'Something went wrong: ' + (err as Error).message)
        }
    }



}


const createAdminIntuDB = async (password: string, adminData: TAdmin) => {

    const session = await mongoose.startSession();

    try {
        session.startTransaction()
        const userData: Partial<TUser> = {}
        const adminId = await UserUltis.generateAdminId();



        userData.password = password || (config.default_pass as string);
        userData.role = "admin"
        userData.email = adminData.email;
        userData.id = adminId

        const newUser = await User.create([userData], { session });
       console.log(userData);
        if (!newUser.length) {
            throw new AppError(400, 'Faild to create user')
        }
        //set id ,_id as user
        adminData.id = newUser[0].id;
        adminData.user = newUser[0]._id
        //create a faculty



        const newAdmin = await Admin.create([adminData], { session });
        // console.log(newFaculty);
        if (!newAdmin.length) {
            throw new AppError(400, 'Faild to create Admin')
        }
        

        // commit the transaction
        await session.commitTransaction();
        session.endSession();

        return newAdmin

    } catch (err) {
        await session.abortTransaction();
        session.endSession();
        if (err instanceof mongoose.Error) {
            throw new AppError(400, 'Database error: ' + err.message)
        } else {
            throw new AppError(500, 'Something went wrong: ' + (err as Error).message)
        }
    }
}

export const UserServices = {
    createAdminIntuDB,
    createStudenIntoDB,
    createFacultyIntuDB
}