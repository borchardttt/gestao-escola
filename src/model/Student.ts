
import { Person } from './Person';

export class Student extends Person {
  age: number;

  constructor(id: number, name: string, age: number) {
    super(id, name);
    this.age = age;
  }
}

