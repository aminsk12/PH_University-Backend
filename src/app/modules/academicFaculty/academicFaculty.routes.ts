import { Router } from "express";
import { AcademicFacultyController } from "./academicFaculty.controller";
import validateRequest from "../../middlwares/validateRequest";
import { AcademicFacultyValidations } from "./academicFaculty.validation";

const router = Router();

router.post('/create-academic-faculty',
    validateRequest(
        AcademicFacultyValidations.createAcademicFacultyValidation
    ),
    AcademicFacultyController.createAcademicFacultyIntoDB
)
router.get('/',

    AcademicFacultyController.getAllAcademicFaculty
)
router.get('/:academicFacultyId', AcademicFacultyController.getSingleAcademicFaculty)


export const AcademicFacultyRoutes = router;

