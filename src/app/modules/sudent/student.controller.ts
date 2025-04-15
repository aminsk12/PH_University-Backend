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




export const StudentController = {
  getAllStudent,
  getSingleStudent
}