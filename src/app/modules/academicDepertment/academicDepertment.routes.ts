import { Router } from "express";
import { AcademicDepartmentController } from "./academicDepertment.controller";
import validateRequest from "../../middlwares/validateRequest";
import { AcademicDepertmentValidation } from "./academicDepertmentValidation";
import auth from "../../middlwares/auth";
import { userRole } from "../User/user.conostance";

const router = Router();

router.post(
  "/create-academic-department",
  auth(userRole.admin, userRole.superAdmin, userRole.faculty),
  validateRequest(
    AcademicDepertmentValidation.createAcademicDepertmentValidation
  ),
  AcademicDepartmentController.createAcademicDepartmentIntoDB
);

router.get(
  "/",
  auth(userRole.admin, userRole.superAdmin, userRole.faculty),
  AcademicDepartmentController.getAllAcademicDepartment
);

router.get(
  "/:academicDepartmentId",
  auth(userRole.admin, userRole.superAdmin, userRole.faculty),
  AcademicDepartmentController.getSingleAcademicDepartment
);

router.patch(
  "/:academicDepartmentId",
  auth(userRole.admin, userRole.superAdmin, userRole.faculty),
  validateRequest(
    AcademicDepertmentValidation.updateAcademicDepertmentValidation
  ),
  AcademicDepartmentController.updateAcademicDepartment
);

export const AcademicDepartmentRoutes = router;
