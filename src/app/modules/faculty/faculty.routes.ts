import { Router } from "express";
import { FacultyController } from "./faculty.controller";



const router = Router()

router.get('/', FacultyController.getAllFaculty)
router.get('/:facultyId', FacultyController.getSingleFaculty)


export const facultyRoute = router;