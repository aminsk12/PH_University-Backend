/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';

const notFoundMiddleware = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        success: false,
        error: 'Not Found',
        message: 'Resource not found',
    });
};

export default notFoundMiddleware;