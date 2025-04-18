
import { Schema, model } from 'mongoose';
import { TGuardian, TLocalGuardian, TStudent, TStudentName } from './student.interface';


const studentNameSchema = new Schema<TStudentName>({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        maxlength: [20, 'First name cannot be more than 20 characters'],
    },
    middleName: { type: String },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
    },
});

const GuardianSchema = new Schema<TGuardian>({
    fatherName: {
        type: String,
        required: [true, 'Father name is required'],
    },
    fatherOccupation: {
        type: String,
        required: [true, 'Father occupation is required'],
    },
    fatherContactNo: {
        type: String,
        required: [true, 'Father contact number is required'],
    },
    motherName: {
        type: String,
        required: [true, 'Mother name is required'],
    },
    motherOccupation: {
        type: String,
        required: [true, 'Mother occupation is required'],
    },
    motherContactNo: {
        type: String,
        required: [true, 'Mother contact number is required'],
    },
});

const LocalGuardianSchema = new Schema<TLocalGuardian>({
    name: {
        type: String,
        required: [true, 'Local guardian name is required'],
    },
    occupation: {
        type: String,
        required: [true, 'Local guardian occupation is required'],
    },
    contactNo: {
        type: String,
        required: [true, 'Local guardian contact number is required'],
    },
    address: {
        type: String,
        required: [true, 'Local guardian address is required'],
    },
});

const studentSchema = new Schema<TStudent>(
    {
        id: {
            type: String,
            required: [true, 'Student ID is required'],
            unique: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            required: [true, 'User id is required'],
            unique: true,
            ref: "User"
        },
        name: {
            type: studentNameSchema,
            required: [true, 'Student name is required'],
        },
        gender: {
            type: String,
            enum: {
                values: ['male', 'female', 'other'],
                message: '{VALUE} is not supported',
            },
            required: [true, 'Gender is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
        },
        dateOfBirth: {
            type: String,
            required: [true, 'Date of birth is required'],
        },
        contactNo: {
            type: String,
            required: [true, 'Contact number is required'], // fixed "requird"
        },
        emergencyContactNo: {
            type: String,
            required: [true, 'Emergency contact number is required'],
        },
        bloodGroup: { // fixed "bloodGrup"
            type: String,
            enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        },
        presentAddress: { // fixed "prasentAddress"
            type: String,
            required: [true, 'Present address is required'],
        },
        permanentAddress: { // fixed "parmanentAddress"
            type: String,
            required: [true, 'Permanent address is required'],
        },
        guardian: {
            type: GuardianSchema,
            required: [true, 'Guardian information is required'],
        },
        localGuardian: { // fixed "localGuardan"
            type: LocalGuardianSchema,
            required: [true, 'Local guardian information is required'],
        },
        academicDepartment: {
            type: Schema.Types.ObjectId,
            requird: true,
            ref: "AcademicDepartment"
        },
        admissionSemester: {
            type: Schema.Types.ObjectId,
            requird: [true, 'Admission Semester is requird'],
            ref: "AcademicSemister"
        },
        profileImage: { type: String },
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
    }
);




studentSchema.pre('save', async function (next) {
    const isStudentExist = await Student.findOne({
        id: this.id,
    });

    if (isStudentExist) {
        throw new Error('Student ID already exists');
    }
    next();
}
);




const Student = model<TStudent>('Student', studentSchema);

export default Student;