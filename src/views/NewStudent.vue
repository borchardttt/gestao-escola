<template>
  <div class="p-8 bg-gray-600 min-h-screen">
    <div class="max-w-md mx-auto bg-gray-700 p-6 rounded-lg shadow-md">
      <form @submit.prevent="createStudent">
        <div class="mb-4">
          <label for="numberChamada" class="block text-sm font-medium text-gray-300">Número da Chamada</label>

          <input id="numberChamada" v-model="numberChamada" type="number" placeholder="Número da chamada"
            class="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white" />
        </div>
        <div class="mb-4">
          <label for="first_name" class="block text-sm font-medium text-gray-300">Nome do Aluno</label>
          <input placeholder="Nome do Aluno" id="first_name" type="text" v-model="name"
            class="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white" />
        </div>
        <div class="mb-4">
          <label for="age" class="block text-sm font-medium text-gray-300">Idade do Aluno</label>
          <input id="age" v-model="age" type="number" placeholder="Idade do aluno"
            class="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white" />
        </div>
        <div>
          <button type="submit"
            class="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Adicionar
          </button>
        </div>
      </form>
    </div>


    <div class=" mt-5 relative overflow-x-auto">
      <table class="w-1/2 mx-auto text-sm text-center rtl:text-right text-white border border-white text-gray-500 dark:text-gray-400">
        <thead class=" uppercase bg-dark border dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Nome
            </th>
            <th scope="col" class="px-6 py-3">
              Idade do Aluno
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in studentList"
            class=" border-b dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
              {{ student.name }}
            </th>
            <td class="px-6 py-4">
              {{ student.age }}
            </td>
          </tr>


        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import {StudentsController} from '/docs/controllers/StudentsController.js';

export default {
  name: 'NewStudent',
  data() {
    return {
      studentList: [],
      name: '',
      age: 0,
      numberChamada: 0,
      studentsController: new StudentsController()
    };
  },
  methods: {
    createStudent() {
      try {
        let studentCreate = this.studentsController.getNewStudent(this.numberChamada, this.name, this.age);
        this.studentsController.addStudent(studentCreate);
        this.searchAllStudents();
      } catch (error) {
        console.log(error);
      }
    },
    searchAllStudents() {
      this.studentList = this.studentsController.getAllStudents();
    }
  },
  created() {
    this.searchAllStudents();
    this.studentsController.isDataCenterInstance()
    this.searchAllStudents();
  }
}

</script>
