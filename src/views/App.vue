<template>
	<div id="app">
		<Sidebar />
		<img class="logo" alt="Vue logo" src="../assets/escola.png">
		<HelloWorld msg="Sistema de Gestão de Escola" />
		<div v-for="student in students" :key="student.id">
			{{ student.name }}
		</div>
	</div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import HelloWorld from '../components/HelloWorld.vue';
import { StudentsController } from '/dist/controllers/StudentsController.js';

export default {
	name: 'App',
	components: {
		HelloWorld,
		Sidebar
	},
	data() {
		return {
			students: []
		};
	},
	created() {
		const studentsController = new StudentsController();

		this.students = studentsController.getAllStudents();
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

.logo {
	margin-top: 4rem;
	width: 300px;
}
</style>
