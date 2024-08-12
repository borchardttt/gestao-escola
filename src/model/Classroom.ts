import {Student} from "./Student";

export class Classroom {
  id: number;
  name: string;
  teacher?: string;
  students: Student[] = [];

  constructor(id: number, name: string, teacher?: string, students?: Student[]) {
    this.id = id;
    this.name = name;
    this.students = students || [];
    this.teacher = teacher;
  }
}
