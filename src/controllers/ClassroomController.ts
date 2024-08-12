import {Classroom} from "../model/Classroom";
import {MainController} from "../controllers/MainController";

// lembrar de fazer o extends para um maincontroller que instancia o datacenter global
export class ClassroomController extends MainController{

  getNewClassroom(id:number, name:string, teacher:string):Classroom{
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

  getClassroomById(id: number) {
    return this.dc.getClassroomById(id);
  }

  addClassroom(classroom: Classroom) {
    console.log('o que recebi foi');
    console.log(classroom);
    this.dc.addClassroom(classroom);
  }

  addStudentToAClassroom(studentId: number, classroomId: number) {
    const student = this.dc.getStudentById(studentId);
    if (student) {
      this.dc.addStudentToClassroom(student.id, classroomId);
    } else {
      throw new Error('Estudante não encontrado');
    }
  }


  updateClassroom(id: number, updatedClassroomData: Partial<Classroom>) {
    this.dc.updateClassroom(id, updatedClassroomData);
  }

  deleteClassroom(id: number) {
    this.dc.deleteClassroom(id);
  }
}
