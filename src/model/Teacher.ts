// Person.ts

import { Person } from './Person';

export class Teacher extends Person {
  subject: string; //matéria que o prof da aula

  constructor(id: number, name: string, subject: string) {
    super(id, name);
    this.subject = subject;
  }
}
