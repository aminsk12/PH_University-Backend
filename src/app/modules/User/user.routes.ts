import { Router } from "express";
import { UserController } from "./user.controller";
import { studentValidations } from "../sudent/student.validation";
import validateRequest from "../../middlwares/validateRequest";
import { facultyValidations } from "../faculty/faculty.validation";
import { adminValidations } from "../Admin/admin.validation";


const router = Router();


router.post('/create-student',
    validateRequest(studentValidations.createStudentValidationSchema),
    UserController.createStudent
)

router.post('/create-faculty',
    validateRequest(facultyValidations.createFacultyValidationSchema),
    UserController.createFaculty
)

router.post('/create-admin',
    validateRequest(adminValidations.createAdminValidationSchema),
    UserController.createAdmin
)

export const UserRoutes = router