import catchAsync from "../../utils/catctAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicFacultyService } from "./academicFaculty.service";

const createAcademicFacultyIntoDB = catchAsync(async (req, res) => {
    const result = await AcademicFacultyService.createAcademicFacultyInToDB(req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Academic Faculty created successfully",
        data: result,
    })
})

const getAllAcademicFaculty = catchAsync(async (req, res) => {
    const result = await AcademicFacultyService.getAllAcademicFacultyFrom()

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Academic Faculty are retrived successfully",
        data: result,
    })
})


const getSingleAcademicFaculty = catchAsync(async (req, res) => {
    const { academicFacultyId } = req.params;
    const result = await AcademicFacultyService.getSingleAcademicFacultyFrom(academicFacultyId);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Academic Faculty  is retrived successfully",
        data: result,
    })
})


export const AcademicFacultyController = {
    createAcademicFacultyIntoDB,
    getSingleAcademicFaculty,
    getAllAcademicFaculty
}