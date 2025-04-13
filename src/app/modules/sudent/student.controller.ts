/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { StudentServices } from "./student.service";
import studentValidationSchema from "./student.validation";


const createStudent = async (req: Request, res: Response) => {

  try {

    const { student } = req.body;
    const zodParsedData = studentValidationSchema.parse(student)

    const data = await StudentServices.createStudenIntoDB(zodParsedData)

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

const getAllStudent = async (req: Request, res: Response) => {

  try {
    const data = await StudentServices.getAllStudentFromDB()

    res.status(200).json({
      success: true,
      message: "Student are retrived succesfuly",
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


const getSingleStudent = async (req: Request, res: Response) => {

  try {
    const { studentId } = req.params
    const data = await StudentServices.getSingleStudentFromDB(studentId)

    res.status(200).json({
      success: true,
      message: "Student is retrived succesfuly",
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


export const StudentController = {
  createStudent,
  getAllStudent,
  getSingleStudent
}