import { Teacher } from "../model/Teacher";
import { MainController } from "../controllers/MainController";
export class TeacherController extends MainController {
    getAllTeachers() {
        return this.dc.getAllTeachers();
    }
    getNewTeacher(id, name, subject, status) {
        const teacher = new Teacher(id, name, subject, status);
        this.addTeacher(teacher);
    }
    getTeacherById(id) {
        return this.dc.getTeacherById(id);
    }
    addTeacher(teacher) {
        this.dc.addTeacher(teacher);
    }
    updateTeacher(id, updatedTeacherData) {
        this.dc.updateTeacher(id, updatedTeacherData);
    }
    deleteTeacher(id) {
        this.dc.deleteTeacher(id);
    }
}
//# sourceMappingURL=TeacherController.js.map