/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';
import config from '../config';
import { ZodError} from 'zod';
import { TErrorSource } from '../interface/error';
import handelZodError from '../errors/handelZodError';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {

    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';
    let errorSorce: TErrorSource = [{
        path: '',
        message: 'Somthing went wrong'
    }];


    if (err instanceof ZodError) {
        const simplifiedError = handelZodError(err)
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSorce = simplifiedError.errorSorce;
       
    }


    ///ultimate error handler
    res.status(statusCode).json({
        success: false,
        message,
        errorSorce,
        // error: err,
        stack: config.NODE_ENV === 'devlopment' ? err.stack : null,
    });
};

export default globalErrorHandler;