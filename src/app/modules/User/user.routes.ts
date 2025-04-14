import { Router } from "express";
import { UserController } from "./user.controller";
import { studentValidations } from "../sudent/student.validation";
import validateRequest from "../../middlwares/validateRequest";


const router = Router();


router.post('/create-student',
    validateRequest(studentValidations.createStudentValidationSchema),
    UserController.createStudent
)

export const UserRoutes = router