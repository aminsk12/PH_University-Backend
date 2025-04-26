import mongoose from "mongoose";
import { TErrorSources } from "../interface/error";


const handelValidationError = (err: mongoose.Error.ValidationError) => {
    const statusCode = 400;

    const errorSorce: TErrorSources = Object.values(err.errors).map((val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
        return {
            path: val?.path,
            message: val?.message
        }
    })


    return {
        statusCode,
        message: 'Validation Error',
        errorSorce
    }
}

export default handelValidationError;