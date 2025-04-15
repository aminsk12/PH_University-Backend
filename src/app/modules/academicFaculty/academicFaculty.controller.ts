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


export const AcademicFacultyController = {
    createAcademicFacultyIntoDB
}