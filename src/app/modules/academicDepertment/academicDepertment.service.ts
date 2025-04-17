import { TAcademicDepartment } from "./academicDepertment.interface";
import { AcademicDepartment } from "./academicDepertment.model";


const createAcademicDepartmentIntoDB = async (paylod: TAcademicDepartment) => {
    const result = await AcademicDepartment.create(paylod)
    return result
}
const getAllAcademicDepartmentFromDB = async () => {
    const result = await AcademicDepartment.find().populate('academicFaculty')
    return result
}
const getSingleAcademicDepartmentFromDB = async (id: string) => {
    const result = await AcademicDepartment.findById(id).populate('academicFaculty')
    return result
}


const updateAcademicDepartmentInto = async (id: string, paylod: Partial<TAcademicDepartment>) => {
    const result = await AcademicDepartment.findOneAndUpdate({_id:id}, paylod,{
        new: true,
        
    }).populate('academicFaculty')
    return result
}



export const AcademicDepartmentServices = {
    createAcademicDepartmentIntoDB,
    getAllAcademicDepartmentFromDB,
    getSingleAcademicDepartmentFromDB,
    updateAcademicDepartmentInto
}