import catchAsync from "../../utils/catctAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicDepartmentServices } from "./academicDepertment.service";


const createAcademicDepartmentIntoDB = catchAsync(async (req, res) => {
    const result = await AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Academic Depertment created successfully",
        data: result,
    })
})

const getAllAcademicDepartment = catchAsync(async (req, res) => {
    const result = await AcademicDepartmentServices.getAllAcademicDepartmentFromDB()

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Academic Depertment are retrived successfully",
        data: result,
    })
})


const getSingleAcademicDepartment = catchAsync(async (req, res) => {
    const { academicDepartmentId } = req.params;
    const result = await AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(academicDepartmentId);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Academic Depertment  is retrived successfully",
        data: result,
    })
})


export const AcademicDepartmentController = {
    createAcademicDepartmentIntoDB,
    getSingleAcademicDepartment,
    getAllAcademicDepartment
}