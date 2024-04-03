// Person.ts

import { Person } from "./Person";

export class Teacher extends Person {
  subject: string;

  constructor(id: number, name: string, subject: string) {
    super(id, name);
    this.subject = subject;
  }
}
