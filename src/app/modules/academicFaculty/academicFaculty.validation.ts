import { z } from "zod";


const createAcademicFacultyValidation=z.object({
   body:z.object({
    name:z.string({
        required_error:'Academic Faculty name is required'
    })
   })
})



export const AcademicFacultyValidations={
    createAcademicFacultyValidation
}