import catchAsync from "../../utils/catctAsync";
import sendResponse from "../../utils/sendResponse";
import { CourseService } from "./course.service";

const createCourse = catchAsync(async (req, res) => {
    const result = await CourseService.createCourseIntoDB(req.body)

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Course created successfully",
        data: result
    })
})

const getAllCourse = catchAsync(async (req, res) => {
    const result = await CourseService.getAllCoursesFromDB()

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Course are retrive successfully",
        data: result
    })
})

const getSingleCourse = catchAsync(async (req, res) => {

    const { id } = req.params
    const result = await CourseService.getSingleCourseFromDB(id)

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Course is retrived successfully",
        data: result
    })
})

const delitCourse = catchAsync(async (req, res) => {
    const { id } = req.params
    const result = await CourseService.deletCourseFromDB(id)

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Course is deleted successfully",
        data: result
    })
})



export const CourseController = {
    createCourse,
    getAllCourse,
    getSingleCourse,
    delitCourse
}