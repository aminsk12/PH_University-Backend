import catchAsync from "../../utils/catctAsync";
import sendResponse from "../../utils/sendResponse";
import { FacultyService } from "./faculty.service";


const getAllFaculty = catchAsync(async (req, res) => {
    const result = await FacultyService.getAllFacultyFrom()
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Faculty are retrived succesfuly",
        data: result
    })
})

const getSingleFaculty = catchAsync(async (req, res) => {
    const { facultyId } = req.params
    const result = await FacultyService.getSingleFacultyFrom(facultyId)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Faculty is retrived succesfuly",
        data: result
    })
})



export const FacultyController = {
    getAllFaculty,
    getSingleFaculty
}