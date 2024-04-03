import { DataCenter } from "../model/DataCenter";
import { Classroom } from "../model/Classroom";

export class ClassroomController {
  private dc = new DataCenter();

  getAllClassrooms() {
    return this.dc.getAllClassrooms();
  }

  getClassroomById(id: number) {
    return this.dc.getClassroomById(id);
  }

  addClassroom(classroom: Classroom) {
    this.dc.addClassroom(classroom);
  }

  updateClassroom(id: number, updatedClassroomData: Partial<Classroom>) {
    this.dc.updateClassroom(id, updatedClassroomData);
  }

  deleteClassroom(id: number) {
    this.dc.deleteClassroom(id);
  }
}
