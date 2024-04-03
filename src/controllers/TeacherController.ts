import { DataCenter } from "../model/DataCenter";
import { Teacher } from "../model/Teacher";

export class TeacherController {
  private dc = new DataCenter();

  getAllTeachers() {
    return this.dc.getAllTeachers();
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
