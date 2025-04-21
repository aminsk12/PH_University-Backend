import { Router } from 'express';
import { studenRoute } from '../modules/sudent/student.routes';
import { UserRoutes } from '../modules/User/user.routes';
import { AcademicSemesterRoutes } from '../modules/academicSemister/academicSemister.routes';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { AcademicDepartmentRoutes } from './../modules/academicDepertment/academicDepertment.routes';
import { facultyRoute } from '../modules/faculty/faculty.routes';



const router = Router();


const moduleRoutes = [
    {
        path: "/users",
        route: UserRoutes
    },
    {
        path: "/faculty",
        route: facultyRoute
    },
    {
        path: "/student",
        route: studenRoute
    },

    {
        path: "/academic-semester",
        route: AcademicSemesterRoutes
    },
    {
        path: "/academic-faculty",
        route: AcademicFacultyRoutes
    },
    {
        path: "/academic-department",
        route: AcademicDepartmentRoutes
    },
];


moduleRoutes.forEach(route => {
    router.use(route.path, route.route)
})

export default router;