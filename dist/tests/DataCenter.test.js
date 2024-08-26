import { DataCenter } from "../model/DataCenter";
import { Student } from '../model/Student';
import { Teacher } from '../model/Teacher';
import { Classroom } from '../model/Classroom';
import { StatusTeacher } from "../types/StatusTeacher";
import SwalError from "../types/SwalError";
describe('DataCenter', () => {
    let dataCenter;
    beforeEach(() => {
        dataCenter = DataCenter.getInstance();
    });
    afterEach(() => {
        dataCenter.students = [];
        dataCenter.teachers = [];
        dataCenter.classrooms = [];
    });
    test('should add a student', () => {
        const student = new Student(1, 'Aluno teste', 10);
        dataCenter.addStudent(student);
        expect(dataCenter.getAllStudents()).toContain(student);
    });
    test('should return undefined for non-existent student by ID', () => {
        expect(dataCenter.getStudentById(999)).toBeUndefined();
    });
    test('should update a student', () => {
        const student = new Student(1, 'John Doe', 10);
        dataCenter.addStudent(student);
        dataCenter.updateStudent(1, { name: 'Jane Doe' });
        expect(dataCenter.getStudentById(1)?.name).toBe('Jane Doe');
    });
    test('should delete a student', () => {
        const student = new Student(1, 'John Doe', 10);
        dataCenter.addStudent(student);
        dataCenter.deleteStudent(1);
        expect(dataCenter.getStudentById(1)).toBeUndefined();
    });
    test('should add a teacher', () => {
        const status = StatusTeacher.ativo;
        const teacher = new Teacher(1, 'Mr. Smith', 'Teste', status);
        dataCenter.addTeacher(teacher);
        expect(dataCenter.getAllTeachers()).toContain(teacher);
    });
    test('should return an error when adding a teacher with the same name', () => {
        const status = StatusTeacher.ativo;
        const teacher = new Teacher(1, 'Mr. Smith', 'Teste', status);
        dataCenter.addTeacher(teacher);
        const error = dataCenter.addTeacher(teacher);
        expect(error).toBeInstanceOf(SwalError);
    });
    test('should add a classroom', () => {
        const classroom = new Classroom(1, 'Math 101');
        dataCenter.addClassroom(classroom);
        expect(dataCenter.getAllClassrooms()).toContain(classroom);
    });
    test('should add a student to a classroom', () => {
        const student = new Student(1, 'John Doe', 10);
        const classroom = new Classroom(1, 'Math 101');
        dataCenter.addStudent(student);
        dataCenter.addClassroom(classroom);
        dataCenter.addStudentToClassroom(1, 1);
        expect(classroom.students).toContain(student);
    });
    test('should throw an error if student or classroom is not found when adding a student to a classroom', () => {
        expect(() => dataCenter.addStudentToClassroom(999, 999)).toThrow('Estudante ou Sala não encontrada');
    });
});
//# sourceMappingURL=DataCenter.test.js.map