import { Router } from "express";
import { StudentController } from "./student.controller";
import validateRequest from "../../middlwares/validateRequest";
import { studentValidations } from "./student.validation";

const router = Router()


router.get('/', StudentController.getAllStudent)

router.get('/:studentId', StudentController.getSingleStudent)

router.delete('/:studentId', StudentController.deleteStudent)


router.patch('/:studentId',
    validateRequest(studentValidations.updateStudentValidationSchema),
    StudentController.updateStudent
)


export const studenRoute = router;