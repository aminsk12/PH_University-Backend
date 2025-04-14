import { Router } from 'express';
import { studenRoute } from '../modules/sudent/student.routes';
import { UserRoutes } from '../modules/User/user.routes';
import { AcademicSemesterRoutes } from '../modules/academicSemister/academicSemister.routes';


const router = Router();


const moduleRoutes = [
    {
        payth: "/student",
        route: studenRoute
    },
    {
        payth: "/users",
        route: UserRoutes
    },
    {
        payth: "/academic-semester",
        route: AcademicSemesterRoutes
    }
];


moduleRoutes.forEach(route => {
    router.use(route.payth, route.route)
})

export default router;