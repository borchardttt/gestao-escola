import {Teacher} from "../model/Teacher";
import {MainController} from "../controllers/MainController";
import {StatusTeacher} from "../types/StatusTeacher";

export class TeacherController extends MainController {

  getAllTeachers() {
    return this.dc.getAllTeachers();
  }
  getNewTeacher(id: number, name: string, subject:string, status: StatusTeacher): void {
    const teacher= new Teacher(id, name, subject, status);
    this.addTeacher(teacher);
  }
  getTeacherById(id: number) {
    return this.dc.getTeacherById(id);
  }

  addTeacher(teacher: Teacher) {
    this.dc.addTeacher(teacher);
  }

  updateTeacher(id: number, updatedTeacherData: Partial<Teacher>) {
    this.dc.updateTeacher(id, updatedTeacherData);
  }

  deleteTeacher(id: number) {
    this.dc.deleteTeacher(id);
  }
}
