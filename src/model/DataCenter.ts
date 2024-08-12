import {Student} from "./Student";
import {Teacher} from "./Teacher";
import {Classroom} from "./Classroom";
import {IDataCenter} from "../types/IDataCenter";
import SwalError from "../types/SwalError";
import Swal from "sweetalert2";

export class DataCenter implements IDataCenter{
  private static instance: DataCenter;
  private students: Student[] = [];
  private teachers: Teacher[] = [];
  private classrooms: Classroom[] = [];

  private constructor() {}

  public static getInstance(): DataCenter {
    if (!DataCenter.instance) {
      DataCenter.instance = new DataCenter();
    }
    return DataCenter.instance;
  }

  // Métodos genéricos
  getAll<T>(items: T[]): T[] {
    return items;
  }

  getById<T extends { id: number }>(items: T[], id: number): T | undefined {
    return items.find((item) => item.id === id);
  }

  getByName<T extends { name: string }>(items: T[], name: string): T | undefined {
    return items.find((item) => item.name === name);
  }

  add<T>(items: T[], item: T): void {
    items.push(item);
  }

  update<T extends { id: number }>(items: T[], id: number, newData: Partial<T>): void {
    const itemIndex = items.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      items[itemIndex] = {
        ...items[itemIndex],
        ...newData,
      };
    }
  }

  delete<T extends { id: number }>(items: T[], id: number): void {
    items.splice(items.findIndex(item => item.id === id), 1);
  }

  // aq tenho meus métodos específicos para cada entidade usando os tipos genérico
  getAllStudents(): Student[] {
    return this.getAll(this.students);
  }

  getStudentById(id: number): Student | undefined {
    return this.getById(this.students, id);
  }

  getStudentByName(name: string): Student | undefined {
    return this.getByName(this.students, name);
  }

  addStudent(student: Student): void {
    this.add(this.students, student);
  }

  updateStudent(id: number, newData: Partial<Student>): void {
    this.update(this.students, id, newData);
  }

  deleteStudent(id: number): void {
    this.delete(this.students, id);
  }

  getAllTeachers(): Teacher[] {
    return this.getAll(this.teachers);
  }

  getTeacherById(id: number): Teacher | undefined {
    return this.getById(this.teachers, id);
  }

  addTeacher(teacher: Teacher): void | SwalError {
    try {
      let sameTeacher = this.getByName(this.teachers, teacher.name);
      if(sameTeacher) {
        return new SwalError('Esse professor já existe! Cadastre outro!');
      }
    } catch (error) {
      return new SwalError('Não foi possível cadastrar o professor');
      console.error(error);
    }
    this.add(this.teachers, teacher);
  }

  updateTeacher(id: number, updatedTeacherData: Partial<Teacher>): void {
    this.update(this.teachers, id, updatedTeacherData);
  }

  deleteTeacher(id: number): void {
    this.delete(this.teachers, id);
  }

  getAllClassrooms(): Classroom[] {
    return this.getAll(this.classrooms);
  }

  getClassroomById(id: number): Classroom | undefined {
    return this.getById(this.classrooms, id);
  }

  addClassroom(classroom: Classroom): void {
    this.add(this.classrooms, classroom);
  }

  updateClassroom(id: number, updatedClassroomData: Partial<Classroom>): void {
    this.update(this.classrooms, id, updatedClassroomData);
  }

  deleteClassroom(id: number): void {
    this.delete(this.classrooms, id);
  }

  addStudentToClassroom(studentId: number, classroomId: number): void {
    const student = this.getStudentById(studentId);
    const classroom = this.getClassroomById(classroomId);

    if (student && classroom) {
      if (classroom.students && !classroom.students.find(s => s.id === studentId)) {
        classroom.students.push(student);
      }
    } else {
      throw new Error('Estudante ou Sala não encontrada');
    }
  }
}
