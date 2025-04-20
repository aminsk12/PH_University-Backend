import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catctAsync";

const createStudent = catchAsync(async (req, res) => {

    const { password, student } = req.body;

    const result = await UserServices.createStudenIntoDB(password, student)
   // console.log(result);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Student created succesfuly",
        data: result
    })
}
)

const createFaculty = catchAsync(async (req, res) => {

    const { password, faculty } = req.body;

    const result = await UserServices.createFacultyIntuDB(password, faculty)
   // console.log(result);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Faculty created succesfuly",
        data: result
    })
}
)

export const UserController = {
    createStudent,
    createFaculty
}