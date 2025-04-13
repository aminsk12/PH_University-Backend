/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createStudent = async (req: Request, res: Response) => {

    try {

        const { password, student } = req.body;
        //const zodParsedData = studentValidationSchema.parse(student)

        const data = await UserServices.createStudenIntoDB(password, student)

        res.status(200).json({
            success: true,
            message: "Student created succesfuly",
            data: data
        })
    } catch (err: any) {
        console.error("Error creating student:", err.message);

        res.status(500).json({
            success: false,
            message: "Failed to create student",
            error: err.message,
        });
    }
};


export const UserController = {
    createStudent
}