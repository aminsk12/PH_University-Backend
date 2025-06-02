import { Router } from "express";
import { StudentController } from "./student.controller";
import validateRequest from "../../middlwares/validateRequest";
import { studentValidations } from "./student.validation";
import auth from "../../middlwares/auth";
import { userRole } from "../User/user.conostance";

const router = Router();

router.get("/", auth(userRole.admin), StudentController.getAllStudent);

router.get(
  "/:studentId",
  auth(userRole.admin),
  StudentController.getSingleStudent
);

router.delete(
  "/:studentId",
  auth(userRole.admin),
  StudentController.deleteStudent
);

router.patch(
  "/:studentId",
  auth(userRole.admin),
  validateRequest(studentValidations.updateStudentValidationSchema),
  StudentController.updateStudent
);

export const studenRoute = router;
