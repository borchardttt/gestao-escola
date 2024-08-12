import {MainController} from "./MainController";
import {Student} from "../model/Student";

export class StudentsController extends MainController {

  isDataCenterInstance(): boolean {
    const isInstance = super.isDataCenterInstance();
    console.log(`Is DataCenter instance: ${isInstance}`);
    return isInstance;
  }

  getStudentByParam(id: number): Student | undefined;
  getStudentByParam(name: string): Student | undefined;
  getStudentByParam(param: number | string): Student | undefined {
    if (typeof param === 'number') {
      return this.dc.getStudentById(param);
    } else {
      return this.dc.getStudentByName(param);
    }
  }

  getAllStudents() {
    return this.dc.getAllStudents();
  }

  getNewStudent(id: number, name: string, age: number): Student {
    return new Student(id, name, age);
  }

  addStudent(student: Student) {
    console.log('imprimindo o recebido pelo controller');
    console.log(student);
    this.dc.addStudent(student);
  }

  updateStudent(id: number, newData: Partial<Student>) {
    this.dc.updateStudent(id, newData);
  }

  deleteStudent(id: number) {
    this.dc.deleteStudent(id);
  }
}
