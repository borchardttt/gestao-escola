// Classroom.ts
import { Teacher } from "./Teacher";
import { Student } from "./Student";
export class Classroom {
  id: number;
  name: string;
  students: Student[];
  teacher: Teacher;

  constructor(id: number, name: string, teacher:Teacher) {
    this.id = id;
    this.name = name;
    this.students = [];
    this.teacher = teacher;
  }
}