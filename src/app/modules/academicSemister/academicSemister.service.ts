import { TAcademicSemister } from "./academicSemister.interface";
import { AcademicSemister } from "./academicsemister.model";

const createAcademicSemester = async (academicSemister: TAcademicSemister) => {
    const result = await AcademicSemister.create(academicSemister)
    return result;

}


export const AcademicSemesterServices = {
    createAcademicSemester
}
