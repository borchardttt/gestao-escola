import { DataCenter } from "../model/DataCenter";
import { Student } from "../model/Student";

export class StudentsController {
  private dc = new DataCenter();

  getAllStudents() {
    return this.dc.getAllStudents();
  }

  getStudentById(id: number) {
    return this.dc.getStudentById(id);
  }

  addStudent(student: Student) {
    this.dc.addStudent(student);
  }

  updateStudent(id: number, newData: Partial<any>) {
    this.dc.updateStudent(id, newData);
  }

  deleteStudent(id: number) {
    this.dc.deleteStudent(id);
  }
}
