"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const student_service_1 = require("./student.service");
const student_validation_1 = __importDefault(require("./student.validation"));
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { student } = req.body;
        const zodParsedData = student_validation_1.default.parse(student);
        const data = yield student_service_1.StudentServices.createStudenIntoDB(zodParsedData);
        res.status(200).json({
            success: true,
            message: "Student created succesfuly",
            data: data
        });
    }
    catch (err) {
        console.error("Error creating student:", err.message);
        res.status(500).json({
            success: false,
            message: "Failed to create student",
            error: err.message,
        });
    }
});
const getAllStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield student_service_1.StudentServices.getAllStudentFromDB();
        res.status(200).json({
            success: true,
            message: "Student are retrived succesfuly",
            data: data
        });
    }
    catch (err) {
        console.error("Error creating student:", err.message);
        res.status(500).json({
            success: false,
            message: "Failed to create student",
            error: err.message,
        });
    }
});
const getSingleStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.params;
        const data = yield student_service_1.StudentServices.getSingleStudentFromDB(studentId);
        res.status(200).json({
            success: true,
            message: "Student is retrived succesfuly",
            data: data
        });
    }
    catch (err) {
        console.error("Error creating student:", err.message);
        res.status(500).json({
            success: false,
            message: "Failed to create student",
            error: err.message,
        });
    }
});
exports.StudentController = {
    createStudent,
    getAllStudent,
    getSingleStudent
};
