import { TAcademicFaculty } from "./academicFaculty.interface"
import { AcademicFaculty } from "./academicFaculty.model"

const createAcademicFacultyInToDB = async (paylod: TAcademicFaculty) => {
    const result = await AcademicFaculty.create(paylod);
    return result;
}



export const AcademicFacultyService = {
    createAcademicFacultyInToDB
}