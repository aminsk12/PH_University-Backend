import { Router } from "express";
import { AcademicDepartmentController } from "./academicDepertment.controller";
import validateRequest from "../../middlwares/validateRequest";
import { AcademicDepertmentValidation } from "./academicDepertmentValidation";


const router = Router();

router.post('/create-academic-department',
    validateRequest(AcademicDepertmentValidation.createAcademicDepertmentValidation),
    AcademicDepartmentController.createAcademicDepartmentIntoDB

)

router.get('/', AcademicDepartmentController.getAllAcademicDepartment)

router.get('/:academicDepartmentId', AcademicDepartmentController.getSingleAcademicDepartment)

router.patch('/:academicDepartmentId',
    validateRequest(AcademicDepertmentValidation.updateAcademicDepertmentValidation),
    AcademicDepartmentController.updateAcademicDepartment)


export const AcademicDepartmentRoutes = router;