import { Student } from "./Student";
import { Teacher } from "./Teacher";
import { Classroom } from "./Classroom";

export class DataCenter {
  private students: Student[] = [];
  private teachers: Teacher[] = [];
  private classrooms: Classroom[] = [];

  getAllStudents(): Student[] {
    return this.students;
  }

  getStudentById(id: number): Student | undefined {
    return this.students.find((student) => student.id === id);
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  updateStudent(id: number, newData: Partial<Student>): void {
    const studentIndex = this.students.findIndex(
      (student) => student.id === id
    );
    if (studentIndex !== -1) {
      this.students[studentIndex] = {
        ...this.students[studentIndex],
        ...newData,
      };
    }
  }

  deleteStudent(id: number): void {
    this.students = this.students.filter((student) => student.id !== id);
  }

  getAllTeachers(): Teacher[] {
    return this.teachers;
  }

  getTeacherById(id: number): Teacher | undefined {
    return this.teachers.find((teacher) => teacher.id === id);
  }

  addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher);
  }

  updateTeacher(id: number, updatedTeacherData: Partial<Teacher>): void {
    const teacherIndex = this.teachers.findIndex(
      (teacher) => teacher.id === id
    );
    if (teacherIndex !== -1) {
      this.teachers[teacherIndex] = {
        ...this.teachers[teacherIndex],
        ...updatedTeacherData,
      };
    }
  }

  deleteTeacher(id: number): void {
    this.teachers = this.teachers.filter((teacher) => teacher.id !== id);
  }

  getAllClassrooms(): Classroom[] {
    return this.classrooms;
  }

  getClassroomById(id: number): Classroom | undefined {
    return this.classrooms.find((classroom) => classroom.id === id);
  }

  addClassroom(classroom: Classroom): void {
    this.classrooms.push(classroom);
  }

  updateClassroom(id: number, updatedClassroomData: Partial<Classroom>): void {
    const classroomIndex = this.classrooms.findIndex(
      (classroom) => classroom.id === id
    );
    if (classroomIndex !== -1) {
      this.classrooms[classroomIndex] = {
        ...this.classrooms[classroomIndex],
        ...updatedClassroomData,
      };
    }
  }

  deleteClassroom(id: number): void {
    this.classrooms = this.classrooms.filter(
      (classroom) => classroom.id !== id
    );
  }
}
