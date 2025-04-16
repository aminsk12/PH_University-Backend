import { TAcademicDepartment } from "./academicDepertment.interface";
import { AcaddemicDepartment } from "./academicDepertment.model";


const createAcademicDepartmentIntoDB = async (paylod: TAcademicDepartment) => {
    const result = await AcaddemicDepartment.create(paylod)
    return result
}
const getAllAcademicDepartmentFromDB = async ( ) => {
    const result = await AcaddemicDepartment.find().populate('academicFaculty')
    return result
}
const getSingleAcademicDepartmentFromDB = async (id: string) => {
    const result = await AcaddemicDepartment.findById(id).populate('academicFaculty')
    return result
}




export const AcademicDepartmentServices = {
    createAcademicDepartmentIntoDB,
    getAllAcademicDepartmentFromDB,
    getSingleAcademicDepartmentFromDB
}