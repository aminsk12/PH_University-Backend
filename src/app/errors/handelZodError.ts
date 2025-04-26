import { ZodError, ZodIssue } from "zod";
import { TErrorSources } from "../interface/error";

    const handelZodError = (err: ZodError) => {
        const statusCode = 400;

        const errorSorce: TErrorSources = err.issues.map((issue: ZodIssue) => {
            return {
                path: issue.path[issue.path.length - 1],
                message: issue.message
            }
        })

        return {

            statusCode,
            message: ' Validation Error',
            errorSorce
        }
    }

    export default handelZodError;
