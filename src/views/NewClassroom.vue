<template>
  <div class="p-8 bg-gray-600 min-h-screen">
    <div class="md:flex md:gap-6">
    <div class="max-w-md mx-auto bg-gray-700 p-6 rounded-lg shadow-md">
      <h5 class="h5 text-left text-white mb-5">Cadastrar Nova Sala</h5>
      <form @submit.prevent="createClassroom">
        <div class="mb-4">
          <label for="numberChamada" class="block text-sm font-medium text-gray-300">Número da Sala</label>

          <input id="numberChamada" v-model="id" type="number" placeholder="Número da chamada"
                 class="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white" />
        </div>
        <div class="mb-4">
          <label for="first_name" class="block text-sm font-medium text-gray-300">Nome da Sala</label>
          <select v-model="name"
                 class="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="first_name" class="block text-sm font-medium text-gray-300">Professor da Sala</label>
          <select v-model="teacher" class="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white">
            <option v-for="teacher in teachers" :value="teacher.name" :key="teacher.name">{{teacher.name}}</option>
          </select>
        </div>
        <div>
          <button type="submit"
                  class="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Adicionar
          </button>
        </div>
      </form>
    </div>
    <div class="max-w-md mx-auto bg-gray-700 p-6 rounded-lg shadow-md">
      <h5 class="h5 text-left text-white mb-5">Cadastrar Aluno em Sala</h5>
      <form @submit.prevent="addStudentToClassroom">
        <div class="mb-4">
          <label for="numberChamada" class="block text-sm font-medium text-gray-300">Sala</label>

          <select id="classroom" v-model="classroom" class="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white">
            <option v-for="classroom in classRoomLists" :value="classroom.id" :key="classroom.id">{{classroom.id}}º{{classroom.name}}</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="first_name" class="block text-sm font-medium text-gray-300">Aluno</label>
          <select v-model="student" class="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white">
            <option v-for="student in students" :value="student.id" :key="student.id">{{student.name}}</option>
          </select>
        </div>
        <div>
          <button type="submit"
                  class="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Adicionar
          </button>
        </div>
      </form>
    </div>
    </div>

    <div class=" mt-5 relative overflow-x-auto">
      <table class="w-1/2 mx-auto text-sm text-center rtl:text-right text-white border border-radius border-white text-gray-500 dark:text-gray-400">
        <thead class=" uppercase bg-dark border dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            Nome da Sala
          </th>
          <th scope="col" class="px-6 py-3">
            Professor
          </th>
          <th scope="col" class="px-6 py-3">
            Alunos
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="classRoom in classRoomLists"
            class=" border-b dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
            {{classRoom.id}}º{{ classRoom.name }}
          </th>

          <td class="px-6 py-4">
            {{ classRoom.teacher }}
          </td>
          <td class="px-6 py-4" v-if="classRoom.students">
            <ul class="text-left" v-for="classRoomStudent in classRoom.students" >
              <li>{{ classRoomStudent.name }}</li>
            </ul>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import {ClassroomController} from '/docs/controllers/ClassroomController.js';

export default {
  name: 'NewClassroom',
  data() {
    return {
      name: '',
      id: 0,
      teacher: [],
      teachers: [],
      students: [],
      student: 0,
      classroom: 0,
      classRoomLists: [],
      classroomController: new ClassroomController()
    };
  },
  methods: {
    createClassroom() {
      try {
        let classRoomCreate = this.classroomController.getNewClassroom(this.id, this.name, this.teacher);
        this.classroomController.addClassroom(classRoomCreate);
        this.searchAllClassrooms();
      } catch (error) {
        console.log(error);
      }
    },
    searchAllClassrooms() {
      this.classRoomLists = this.classroomController.getAllClassrooms();
    },
    searchAllStudents() {
      this.students = this.classroomController.getAllStudents();
    },
    searchAllTeachers(){
      this.teachers = this.classroomController.getAllTeachers();
    },
    addStudentToClassroom(){
      try {
        this.classroomController.addStudentToAClassroom(this.student, this.classroom);
        this.searchAllClassrooms();
      } catch (error){
        console.log(error)
      }
    }
  },
  created() {
    this.searchAllStudents();
    this.searchAllClassrooms();
    this.searchAllTeachers();
    this.classroomController.isDataCenterInstance()
  }
}

</script>
