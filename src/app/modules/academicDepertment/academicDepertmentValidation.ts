import { z } from "zod";


const createAcademicDepertmentValidation = z.object({
    body: z.object({
        name: z.string({
            required_error: 'Academic Depertment name is required'
        }),
        academicFaculty: z.string({
            required_error: 'Academic Faculty is required'

        })
    })
})



const updateAcademicDepertmentValidation = z.object({
    body: z.object({
        name: z.string().optional(),
        academicFaculty: z.string().optional()
    }),

})
export const AcademicDepertmentValidation = {
    createAcademicDepertmentValidation,
    updateAcademicDepertmentValidation
}