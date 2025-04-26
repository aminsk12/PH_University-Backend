/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { ErrorRequestHandler } from 'express';
import config from '../config';
import { ZodError } from 'zod';

type TErrorSource = {
    path: string | number,
    message: string
}[]

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {

    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';
    const errorSorce: TErrorSource = [{
        path: '',
        message: 'Somthing went wrong'
    }]


if(err instanceof ZodError){
    statusCode=400;
    message= 'ami zod error'
}
     

    res.status(statusCode).json({
        success: false,
        message,
        errorSorce,
        error: err,
        stack: config.NODE_ENV === 'devlopment' ? err.stack : null,
    });
};

export default globalErrorHandler;