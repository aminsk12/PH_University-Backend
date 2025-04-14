import catchAsync from "../../utils/catctAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicSemesterServices } from "./academicSemister.service";

const createAcademicSemester = catchAsync(async (req, res) => {
    const result = await AcademicSemesterServices.createAcademicSemester(req.body);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Academic Semister created successfully",
        data: result
    })

})

const getAllAcademicSemester = catchAsync(async (req, res) => {
    const result = await AcademicSemesterServices.getAllAcademicSemester();
    console.log(result);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Academic Semister are retrived successfully",
        data: result
    })

})

const getSingleAcademicSemester = catchAsync(async (req, res) => {
    const { academicSemisterId } = req.params
    const result = await AcademicSemesterServices.getSingleAcademicSemester(academicSemisterId);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Academic Semister is retrived successfully",
        data: result
    })

})

export const AcademicSemisterController = {
    createAcademicSemester,
    getAllAcademicSemester,
    getSingleAcademicSemester
}
