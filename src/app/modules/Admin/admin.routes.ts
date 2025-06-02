import { Router } from "express";
import { AdminController } from "./admin.controller";
import auth from "../../middlwares/auth";
import { userRole } from "../User/user.conostance";





const router = Router()

router.get('/',auth(userRole.admin), AdminController.getAllAdmin)
router.get('/:adminId',auth(userRole.admin), AdminController.getSingleAdmin)


export const adminRoute = router;