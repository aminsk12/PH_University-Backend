import catchAsync from "../../utils/catctAsync";
import sendResponse from "../../utils/sendResponse";
import { AdminService } from "./admin.service";



const getAllAdmin = catchAsync(async (req, res) => {
    const result = await AdminService.getAllAdminFrom()
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Admin are retrived succesfuly",
        data: result
    })
})

const getSingleAdmin = catchAsync(async (req, res) => {
    const { adminId } = req.params
    const result = await AdminService.getSingleAdminFrom (adminId)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Admin is retrived succesfuly",
        data: result
    })
})



export const AdminController = {
    getAllAdmin,
    getSingleAdmin
}