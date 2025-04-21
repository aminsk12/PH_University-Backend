import { Faculty } from "./faculty.model"



const getAllFacultyFrom = async () => {

    const result = await Faculty.find()
    return result

}
const getSingleFacultyFrom = async (id:string) => {

    const result = await Faculty.findById(id)
    return result

}



export const FacultyService = {
    getAllFacultyFrom,
    getSingleFacultyFrom
}