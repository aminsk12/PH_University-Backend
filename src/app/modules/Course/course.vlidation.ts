import { z } from "zod";


const createCourseValidationSchema = z.object({
    body: z.object({
        title: z.string({
            required_error: "Title is required"
        }),
        prefix: z.string({
            required_error: "Prefix is required"
        }),
        code: z.number({
            required_error: "Code is required"
        }),
        credits: z.number({
            required_error: "Credits is required"
        }).min(1).max(100),
        preRequisiteCourses: z.array(z.object({
            course: z.string(),
            isDeleted: z.boolean().optional()
        })).optional(),
        isDeleted: z.boolean().optional()
    })
})




export const CourseValidation = {
    createCourseValidationSchema
}