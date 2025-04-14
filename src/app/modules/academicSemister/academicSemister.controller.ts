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


export const AcademicSemisterController = {
    createAcademicSemester
}
