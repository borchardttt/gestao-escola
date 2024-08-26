import { Classroom } from "../model/Classroom";
import { MainController } from "../controllers/MainController";
// lembrar de fazer o extends para um maincontroller que instancia o datacenter global
export class ClassroomController extends MainController {
    getNewClassroom(id, name, teacher) {
        return new Classroom(id, name, teacher);
    }
    getAllClassrooms() {
        return this.dc.getAllClassrooms();
    }
    getAllTeachers() {
        return this.dc.getAllTeachers();
    }
    getAllStudents() {
        return this.dc.getAllStudents();
    }
    getClassroomById(id) {
        return this.dc.getClassroomById(id);
    }
    addClassroom(classroom) {
        console.log('o que recebi foi');
        console.log(classroom);
        this.dc.addClassroom(classroom);
    }
    addStudentToAClassroom(studentId, classroomId) {
        const student = this.dc.getStudentById(studentId);
        if (student) {
            this.dc.addStudentToClassroom(student.id, classroomId);
        }
        else {
            throw new Error('Estudante não encontrado');
        }
    }
    updateClassroom(id, updatedClassroomData) {
        this.dc.updateClassroom(id, updatedClassroomData);
    }
    deleteClassroom(id) {
        this.dc.deleteClassroom(id);
    }
}
//# sourceMappingURL=ClassroomController.js.map