import { z } from "zod";

const createAcademicScemisterValidation = z.object({
    body: z.object({
        name: z.enum(["Autam", "Summer", "Fall"], {
            required_error: "Name is required",
            invalid_type_error: "Name must be one of the following: Autam, Summer, Fall"
        }),
        code: z.enum(["01", "02", "03"], {
            required_error: "Code is required",
            invalid_type_error: "Code must be one of the following: 01, 02, 03"
        }),
        year: z.string({
            required_error: "Year is required",
            invalid_type_error: "Year must be a string"
        }),
        startMonth: z.enum(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], {
            required_error: "Start month is required",
            invalid_type_error: "Start month must be one of the following: January, February, March, April, May, June, July, August, September, October, November, December"
        }),
        endMonth: z.enum(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], {
            required_error: "End month is required",
            invalid_type_error: "End month must be one of the following: January, February, March, April, May, June, July, August, September, October, November, December"
        })
    })
})

export const AcademicSemisterValidations = {
    createAcademicScemisterValidation
}