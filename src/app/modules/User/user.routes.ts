import { Router } from "express";
import { UserController } from "./user.controller";
import { studentValidations } from "../sudent/student.validation";
import validateRequest from "../../middlwares/validateRequest";
import { facultyValidations } from "../faculty/faculty.validation";
import { adminValidations } from "../Admin/admin.validation";
import auth from "../../middlwares/auth";
import { userRole } from "./user.conostance";


const router = Router();


router.post('/create-student',
    auth(userRole.admin, userRole.faculty, userRole.superAdmin),
    validateRequest(studentValidations.createStudentValidationSchema),
    UserController.createStudent
)

router.post('/create-faculty',
    auth(userRole.admin, userRole.superAdmin),
    validateRequest(facultyValidations.createFacultyValidationSchema),
    UserController.createFaculty
)

router.post('/create-admin',
    auth(userRole.admin, userRole.superAdmin),
    validateRequest(adminValidations.createAdminValidationSchema),
    UserController.createAdmin
)

export const UserRoutes = router