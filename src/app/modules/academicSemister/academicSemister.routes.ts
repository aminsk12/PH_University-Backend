import { Router } from "express";
import validateRequest from "../../middlwares/validateRequest";
import { AcademicSemisterValidations } from "./academicSemister.validations";
import { AcademicSemisterController } from "./academicSemister.controller";
import auth from "../../middlwares/auth";
import { userRole } from "../User/user.conostance";

const router = Router();

router.post(
  "/create-academic-semester",
  auth(userRole.admin, userRole.superAdmin, userRole.faculty),
  validateRequest(
    AcademicSemisterValidations.createAcademicScemisterValidation
  ),
  AcademicSemisterController.createAcademicSemester
);

router.get(
  "/",
  auth(userRole.admin, userRole.superAdmin, userRole.faculty),
  AcademicSemisterController.getAllAcademicSemester
);

router.get(
  "/:academicSemisterId",
  auth(userRole.admin, userRole.superAdmin, userRole.faculty),
  AcademicSemisterController.getSingleAcademicSemester
);
export const AcademicSemesterRoutes = router;
