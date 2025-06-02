import { Router } from "express";
import { FacultyController } from "./faculty.controller";
import auth from "../../middlwares/auth";
import { userRole } from "../User/user.conostance";

const router = Router();

router.get(
  "/",
  auth(userRole.faculty, userRole.admin),
  FacultyController.getAllFaculty
);
router.get(
  "/:facultyId",
  auth(userRole.faculty, userRole.admin),
  FacultyController.getSingleFaculty
);

export const facultyRoute = router;
