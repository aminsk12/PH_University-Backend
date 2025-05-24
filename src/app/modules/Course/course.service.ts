import { TCourse } from "./course.interface";
import { Course } from "./course.model"


const createCourseIntoDB = async (paylod:TCourse) => {
    const result = await Course.create(paylod);
    return result
}
const getAllCoursesFromDB = async () => {
    const result = await Course.find().populate('preRequisiteCourses.course');
    return result
}
const getSingleCourseFromDB = async (id: string) => {
    const result = await Course.findById(id).populate('preRequisiteCourses.course');
    return result
}
const deletCourseFromDB = async (id: string) => {
    const result = await Course.findByIdAndUpdate(
        id,
        { isDeleted: false },
        { new: true }
    );
    return result
}

export const CourseService = {
    createCourseIntoDB,
    getAllCoursesFromDB,
    getSingleCourseFromDB,
    deletCourseFromDB
}