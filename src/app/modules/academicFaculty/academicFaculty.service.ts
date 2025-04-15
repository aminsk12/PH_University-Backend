import { TAcademicFaculty } from "./academicFaculty.interface"
import { AcademicFaculty } from "./academicFaculty.model"

const createAcademicFacultyInToDB = async (paylod: TAcademicFaculty) => {
    const result = await AcademicFaculty.create(paylod);
    return result;
}


const getAllAcademicFacultyFrom = async () => {
    const result = await AcademicFaculty.find();
    return result;
}

const getSingleAcademicFacultyFrom = async (id:string) => {
    const result = await AcademicFaculty.findById(id);
    return result;
}


export const AcademicFacultyService = {
    createAcademicFacultyInToDB,
    getAllAcademicFacultyFrom,
    getSingleAcademicFacultyFrom
}