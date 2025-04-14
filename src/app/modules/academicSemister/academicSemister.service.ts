import { academicSemisterNameCodeMapper } from "./academicSemester.conostance";
import { TAcademicSemister } from "./academicSemister.interface";
import { AcademicSemister } from "./academicsemister.model";

const createAcademicSemester = async (academicSemister: TAcademicSemister) => {

    if(academicSemisterNameCodeMapper[academicSemister.name]!== academicSemister.code) {
        throw new Error('Invalid semester code')
    }
    const result = await AcademicSemister.create(academicSemister)
    return result;
}

const getAllAcademicSemester = async () => {
    const result = await AcademicSemister.find()
    return result;

}

const getSingleAcademicSemester = async (id:string) => {
    const result = await AcademicSemister.findById(id)
    return result;

}

export const AcademicSemesterServices = {
    createAcademicSemester,
    getAllAcademicSemester,
    getSingleAcademicSemester
}
