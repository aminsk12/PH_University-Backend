import { Router } from "express";
import { CourseController } from "./course.controller";
import validateRequest from "../../middlwares/validateRequest";
import { CourseValidation } from "./course.vlidation";
import auth from "../../middlwares/auth";
import { userRole } from "../User/user.conostance";

const router = Router();

router.post(
  "/create-course",
  auth(userRole.admin, userRole.superAdmin, userRole.faculty),
  validateRequest(CourseValidation.createCourseValidationSchema),
  CourseController.createCourse
);

router.get(
  "/",
  auth(userRole.admin, userRole.superAdmin, userRole.faculty),
  CourseController.getAllCourse
);

router.get(
  "/:id",
  auth(userRole.admin, userRole.superAdmin, userRole.faculty),
  CourseController.getSingleCourse
);

router.delete(
  "/:id",
  auth(userRole.admin, userRole.superAdmin, userRole.faculty),
  CourseController.delitCourse
);

export const CourseRoutes = router;
