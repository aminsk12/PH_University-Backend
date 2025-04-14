import { Router } from "express";
import validateRequest from "../../middlwares/validateRequest";
import { AcademicSemisterValidations } from "./academicSemister.validations";
import { AcademicSemisterController } from "./academicSemister.controller";


const router = Router();

router.post('/create-academic-semester',
    validateRequest(AcademicSemisterValidations.createAcademicScemisterValidation),
    AcademicSemisterController.createAcademicSemester
    
)


export const AcademicSemesterRoutes = router;