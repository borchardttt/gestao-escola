import { MainController } from "./MainController";
import { Student } from "../model/Student";
export class StudentsController extends MainController {
    isDataCenterInstance() {
        const isInstance = super.isDataCenterInstance();
        console.log(`Is DataCenter instance: ${isInstance}`);
        return isInstance;
    }
    getStudentByParam(param) {
        if (typeof param === 'number') {
            return this.dc.getStudentById(param);
        }
        else {
            return this.dc.getStudentByName(param);
        }
    }
    getAllStudents() {
        return this.dc.getAllStudents();
    }
    getNewStudent(id, name, age) {
        return new Student(id, name, age);
    }
    addStudent(student) {
        console.log('imprimindo o recebido pelo controller');
        console.log(student);
        this.dc.addStudent(student);
    }
    updateStudent(id, newData) {
        this.dc.updateStudent(id, newData);
    }
    deleteStudent(id) {
        this.dc.deleteStudent(id);
    }
}
//# sourceMappingURL=StudentsController.js.map