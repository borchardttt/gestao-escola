import Person from "./Person";
import {StatusTeacher} from "../types/StatusTeacher";

export class Teacher extends Person {
  subject: string;
  status: StatusTeacher;

  constructor(id: number, name: string, subject: string, status: StatusTeacher) {
    super(id, name);
    this.subject = subject;
    this.status = status;
  }
}
