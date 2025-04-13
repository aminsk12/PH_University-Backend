import { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.service";
import sendResponse from "../../utils/sendResponse";



const getAllStudent = async (req: Request, res: Response, next: NextFunction) => {

  try {
    const data = await StudentServices.getAllStudentFromDB()
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Student are retrived succesfuly",
      data: data
    })
  } catch (err) {
    next(err)
  }
};


const getSingleStudent = async (req: Request, res: Response, next: NextFunction) => {

  try {
    const { studentId } = req.params
    const data = await StudentServices.getSingleStudentFromDB(studentId)

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Student is retrived succesfuly",
      data: data
    })
  } catch (err) {
    next(err)
  }
};


export const StudentController = {
  getAllStudent,
  getSingleStudent
}