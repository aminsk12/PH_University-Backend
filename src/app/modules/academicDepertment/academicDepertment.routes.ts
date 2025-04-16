import { Router } from "express";
import { AcademicDepartmentController } from "./academicDepertment.controller";


const router = Router();

router.post('/create-academic-department',
    AcademicDepartmentController.createAcademicDepartmentIntoDB

)
router.get('/',

    AcademicDepartmentController.getAllAcademicDepartment
)
router.get('/:academicDepartmentId', AcademicDepartmentController.getSingleAcademicDepartment)


export const AcademicDepartmentRoutes = router;