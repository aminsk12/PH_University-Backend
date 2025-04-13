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
exports.StudentServices = void 0;
const student_modal_1 = __importDefault(require("./student.modal"));
const createStudenIntoDB = (studentData) => __awaiter(void 0, void 0, void 0, function* () {
    //const result = await Student.create(student)  //built in static method
    // console.log(result);
    const student = new student_modal_1.default(studentData);
    const result = yield student.save(); // built in instance method
    return result;
});
const getAllStudentFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_modal_1.default.find();
    console.log(result);
    return result;
});
const getSingleStudentFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_modal_1.default.findById(id);
    console.log(result);
    return result;
});
exports.StudentServices = {
    createStudenIntoDB,
    getAllStudentFromDB,
    getSingleStudentFromDB
};
