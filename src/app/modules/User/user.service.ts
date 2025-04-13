import config from "../../config"
import { TStudent } from "../sudent/student.interface"
import Student from "../sudent/student.modal"
import { TUser } from "./user.interface"
import { User } from "./user.model"


const createStudenIntoDB = async (password: string, studentData: TStudent) => {
    //create a user obj
    const userData: Partial<TUser> = {}

    // if password is not given, use default password
    userData.password = password || (config.default_pass as string)
    // if (!password) {
    //     user.password = config.default_pass as string;
    // }else{
    //     user.password= password
    // }

    //set student role
    userData.role = "student"
    //set manually generated ID
    userData.id = "2030100001"
    // set email 
    userData.email = studentData.email

    //create a user 
    const newUser = await User.create(userData);

    //create a student
    if (Object.keys(newUser).length) {
        //set id ,_id as user
        studentData.id = newUser.id;
        studentData.user = newUser._id;

        const newStudent = Student.create(studentData)
        return newStudent
    }
}


export const UserServices = {
    createStudenIntoDB
}