import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";

const createStudent = async (req: Request, res: Response,next: NextFunction) => {

    try {

        const { password, student } = req.body;
        const result = await UserServices.createStudenIntoDB(password, student)
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Student created succesfuly",
            data: result
        })
    } catch (err) {
        next(err)
    }
};


export const UserController = {
    createStudent
}