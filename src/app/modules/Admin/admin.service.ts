import { Admin } from "./admin.model"




const getAllAdminFrom = async () => {

    const result = await Admin.find()
    return result

}
const getSingleAdminFrom = async (id:string) => {

    const result = await Admin.findById(id)
    return result

}



export const AdminService = {
    getAllAdminFrom,
    getSingleAdminFrom
}