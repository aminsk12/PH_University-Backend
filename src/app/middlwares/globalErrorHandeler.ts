/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { ErrorRequestHandler } from 'express';
import config from '../config';

const globalErrorHandler:ErrorRequestHandler = (
    err,
    req,
    res,
    next
) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        success: false,
        message,
        error:err,
        stack: config.NODE_ENV === 'devlopment' ? err.stack : null,
    });
};

export default globalErrorHandler;