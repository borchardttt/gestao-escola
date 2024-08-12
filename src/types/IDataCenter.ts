import { Student } from "..//model/Student";
import { Teacher } from "../model/Teacher";
import {Classroom} from "../model/Classroom";
import SwalError from "@/types/SwalError";

export interface IDataCenter {
    getAllStudents(): Student[];
    getStudentById(id: number): Student | undefined;
    getStudentByName(name: string): Student | undefined;
    addStudent(student: Student): void | SwalError;
    updateStudent(id: number, newData: Partial<Student>): void;
    deleteStudent(id: number): void;

    getAllTeachers(): Teacher[];
    getTeacherById(id: number): Teacher | undefined;
    addTeacher(teacher: Teacher): void;
    updateTeacher(id: number, updatedTeacherData: Partial<Teacher>): void;
    deleteTeacher(id: number): void;

    getAllClassrooms(): Classroom[];
    getClassroomById(id: number): Classroom | undefined;
    addClassroom(classroom: Classroom): void;
    updateClassroom(id: number, updatedClassroomData: Partial<Classroom>): void;
    deleteClassroom(id: number): void;

    addStudentToClassroom(studentId: number, classroomId: number): void;
}
