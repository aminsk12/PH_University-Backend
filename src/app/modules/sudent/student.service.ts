
import Student from "./student.modal"

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
    getAllStudentFromDB,
    getSingleStudentFromDB
}