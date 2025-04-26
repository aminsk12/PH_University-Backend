import { ZodError, ZodIssue } from "zod";
import { TErrorSource } from "../interface/error";

    const handelZodError = (err: ZodError) => {
        const statusCode = 400;

        const errorSorce: TErrorSource = err.issues.map((issue: ZodIssue) => {
            return {
                path: issue.path[issue.path.length - 1],
                message: issue.message
            }
        })

        return {

            statusCode,
            message: ' Zod Validation Error',
            errorSorce
        }
    }

    export default handelZodError;
