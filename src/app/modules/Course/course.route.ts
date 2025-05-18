import { Router } from "express";
import { CourseController } from "./course.controller";
import validateRequest from "../../middlwares/validateRequest";
import { CourseValidation } from "./course.vlidation";

const router = Router()

router.post('/create-course',
    validateRequest(CourseValidation.createCourseValidationSchema),
    CourseController.createCourse
)

router.get('/', CourseController.getAllCourse)

router.get('/:id', CourseController.getSingleCourse)

router.delete('/:id', CourseController.delitCourse)


export const CourseRoutes = router;