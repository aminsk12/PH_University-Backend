import { TAcademicSemister } from "../academicSemister/academicSemister.interface";

const generateStudentId = (paylod: TAcademicSemister)=>{


    const curreId =(0).toString()

    let incrementId =  (Number(curreId)+1).toString().padStart(4, '0')

    incrementId =`${paylod.year}${paylod.code}${incrementId}`


    return incrementId
}


export default generateStudentId