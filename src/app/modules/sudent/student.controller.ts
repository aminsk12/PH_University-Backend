import { StudentServices } from "./student.service";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catctAsync";



const getAllStudent = catchAsync(async (req, res) => {
  const data = await StudentServices.getAllStudentFromDB()
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Student are retrived succesfuly",
    data: data
  })
}
)


const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params
  const data = await StudentServices.getSingleStudentFromDB(studentId)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Student is retrived succesfuly",
    data: data
  })
})


const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params
  const data = await StudentServices.deleteStudentFromDB(studentId)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Student is deleted succesfuly",
    data: data
  })
})

const updateStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params
  const { student } = req.body

  const data = await StudentServices.updateStudentFromDB(studentId, student)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Student is Update succesfuly",
    data: data
  })
})



export const StudentController = {
  getAllStudent,
  getSingleStudent,
  deleteStudent,
  updateStudent
}



