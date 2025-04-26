import { TAcademicSemister } from "../academicSemister/academicSemister.interface";
import { User } from "./user.model";



const findLastStudentId = async () => {
    const lastStudent = await User.findOne(
        {
            role: "student"
        },
        {
            id: 1,
            _id: 0
        },

    )
        .sort({ createdAt: -1 })
        .lean()

    return lastStudent?.id ? lastStudent.id : "0000"
}


const generateStudentId = async (paylod: TAcademicSemister) => {


    let curreId = (0).toString()

    const lastStudentId = await findLastStudentId()
    const lastStudentSemesterCode = lastStudentId?.slice(4, 6);
    const lastStudentYear = lastStudentId?.slice(0, 4);
    const currentSemesterCode = paylod.code
    const currentYear = paylod.year

    // if (lastStudentId && lastStudentSemesterCode !== currentSemesterCode && lastStudentYear !== currentYear) {
    //     curreId = lastStudentId.substring(6)
    // }

    if (lastStudentId && lastStudentSemesterCode === currentSemesterCode && lastStudentYear === currentYear) {
        curreId = lastStudentId.substring(6)
    }

    let incrementId = (Number(curreId) + 1).toString().padStart(4, '0')

    incrementId = `${paylod.year}${paylod.code}${incrementId}`


    return incrementId
}


export default generateStudentId






const findLastFacultyId = async () => {
    const lastFaculty = await User.findOne(
        {
            role: "faculty"
        },
        {
            id: 1,
            _id: 0
        }
    )
        .sort({ createdAt: -1 })
        .lean();

    return lastFaculty?.id ? lastFaculty.id : undefined;
}

const generateFacultyId = async () => {
    const lastFacultyId = await findLastFacultyId();
    let currentIdNumber = 0; // Default starting number

    if (lastFacultyId) {
        // Extract the numeric part after "F-"
        const idParts = lastFacultyId.split('-');
        if (idParts.length === 2) {
            currentIdNumber = parseInt(idParts[1]) || 0;
        }
    }

    // Increment and format the ID
    const nextIdNumber = currentIdNumber + 1;
    const formattedId = `F-${nextIdNumber.toString().padStart(4, '0')}`;

    return formattedId;
}

export const UserUltis = {
    generateFacultyId
}





