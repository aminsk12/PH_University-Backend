import { Router } from "express";
import { AcademicFacultyController } from "./academicFaculty.controller";
import validateRequest from "../../middlwares/validateRequest";
import { AcademicFacultyValidations } from "./academicFaculty.validation";
import auth from "../../middlwares/auth";
import { userRole } from "../User/user.conostance";

const router = Router();

router.post(
  "/create-academic-faculty",
  auth(userRole.admin, userRole.superAdmin, userRole.faculty),
  validateRequest(AcademicFacultyValidations.createAcademicFacultyValidation),
  AcademicFacultyController.createAcademicFacultyIntoDB
);
router.get(
  "/",
  auth(userRole.admin, userRole.superAdmin, userRole.faculty),
  AcademicFacultyController.getAllAcademicFaculty
);
router.get(
  "/:academicFacultyId",
  auth(userRole.admin, userRole.superAdmin, userRole.faculty),
  AcademicFacultyController.getSingleAcademicFaculty
);

export const AcademicFacultyRoutes = router;
