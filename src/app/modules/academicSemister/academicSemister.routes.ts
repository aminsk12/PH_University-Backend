import { Router } from "express";
import validateRequest from "../../middlwares/validateRequest";
import { AcademicSemisterValidations } from "./academicSemister.validations";
import { AcademicSemisterController } from "./academicSemister.controller";


const router = Router();

router.post('/create-academic-semester',
    validateRequest(AcademicSemisterValidations.createAcademicScemisterValidation),
    AcademicSemisterController.createAcademicSemester

)

router.get('/',
    AcademicSemisterController.getAllAcademicSemester

)

router.get('/:academicSemisterId',
    AcademicSemisterController.getSingleAcademicSemester

)
export const AcademicSemesterRoutes = router;