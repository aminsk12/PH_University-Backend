import mongoose from "mongoose";
import { TErrorSources, TGenericErrorResponse } from "../interface/error";

const handelCastError = (err: mongoose.Error.CastError): TGenericErrorResponse => {
    const statusCode = 400;

    const errorSorce: TErrorSources = [
        {
            path: err.path,
            message: err.message
        }
    ]

    return {
        statusCode,
        message: 'Invalid ID',
        errorSorce
    }
}

export default handelCastError;