import SwalError from "../types/SwalError";
export class DataCenter {
    constructor() {
        this.students = [];
        this.teachers = [];
        this.classrooms = [];
    }
    static getInstance() {
        if (!DataCenter.instance) {
            DataCenter.instance = new DataCenter();
        }
        return DataCenter.instance;
    }
    // aq alguns métodos genéricos para usar em vários tipos
    getAll(items) {
        return items;
    }
    getById(items, id) {
        return items.find((item) => item.id === id);
    }
    getByName(items, name) {
        return items.find((item) => item.name === name);
    }
    add(items, item) {
        items.push(item);
    }
    update(items, id, newData) {
        const itemIndex = items.findIndex((item) => item.id === id);
        if (itemIndex !== -1) {
            items[itemIndex] = {
                ...items[itemIndex],
                ...newData,
            };
        }
    }
    delete(items, id) {
        items.splice(items.findIndex(item => item.id === id), 1);
    }
    // aq tenho meus métodos específicos para cada entidade usando os tipos genérico
    getAllStudents() {
        return this.getAll(this.students);
    }
    getStudentById(id) {
        return this.getById(this.students, id);
    }
    getStudentByName(name) {
        return this.getByName(this.students, name);
    }
    addStudent(student) {
        this.add(this.students, student);
    }
    updateStudent(id, newData) {
        this.update(this.students, id, newData);
    }
    deleteStudent(id) {
        this.delete(this.students, id);
    }
    getAllTeachers() {
        return this.getAll(this.teachers);
    }
    getTeacherById(id) {
        return this.getById(this.teachers, id);
    }
    addTeacher(teacher) {
        try {
            let sameTeacher = this.getByName(this.teachers, teacher.name);
            if (sameTeacher) {
                return new SwalError('Esse professor já existe! Cadastre outro!');
            }
        }
        catch (error) {
            return new SwalError('Não foi possível cadastrar o professor');
            console.error(error);
        }
        this.add(this.teachers, teacher);
    }
    updateTeacher(id, updatedTeacherData) {
        this.update(this.teachers, id, updatedTeacherData);
    }
    deleteTeacher(id) {
        this.delete(this.teachers, id);
    }
    getAllClassrooms() {
        return this.getAll(this.classrooms);
    }
    getClassroomById(id) {
        return this.getById(this.classrooms, id);
    }
    addClassroom(classroom) {
        this.add(this.classrooms, classroom);
    }
    updateClassroom(id, updatedClassroomData) {
        this.update(this.classrooms, id, updatedClassroomData);
    }
    deleteClassroom(id) {
        this.delete(this.classrooms, id);
    }
    addStudentToClassroom(studentId, classroomId) {
        const student = this.getStudentById(studentId);
        const classroom = this.getClassroomById(classroomId);
        if (student && classroom) {
            if (classroom.students && !classroom.students.find(s => s.id === studentId)) {
                classroom.students.push(student);
            }
        }
        else {
            throw new Error('Estudante ou Sala não encontrada');
        }
    }
}
//# sourceMappingURL=DataCenter.js.map