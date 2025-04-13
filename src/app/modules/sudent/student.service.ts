
import { TStudent } from "./student.interface";
import Student from "./student.modal"

const createStudenIntoDB = async (studentData: TStudent) => {
    //const result = await Student.create(student)  //built in static method
    // console.log(result);

    const student = new Student(studentData);
    const result = await student.save() // built in instance method
    return result
}

const getAllStudentFromDB = async () => {
    const result = await Student.find( )
    console.log(result);
    return result
}

const getSingleStudentFromDB = async (id: string) => {
    const result = await Student.findById(id )
    console.log(result);
    return result
}

export const StudentServices = {
    createStudenIntoDB,
    getAllStudentFromDB,
    getSingleStudentFromDB
}