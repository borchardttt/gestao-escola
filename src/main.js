import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import './assets/tailwind.css';
import 'flowbite';
import Swal from 'sweetalert2';
import App from './views/App.vue';
import Sidebar from './components/Sidebar.vue';
import HelloWorld from './components/HelloWorld.vue';

import NewClassroom from './views/NewClassroom.vue';
import NewStudent from './views/NewStudent.vue';
import NewTeacher from './views/NewTeacher.vue';

const routes = [
	{ path: '/cadastrar-sala', component: NewClassroom },
	{ path: '/novo-aluno', component: NewStudent },
	{ path: '/novo-professor', component: NewTeacher },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(App)
	.use(router)
	.component('Sidebar', Sidebar)
	.component('HelloWorld', HelloWorld)
	.component('NewClassroom', NewClassroom)
	.component('NewStudent', NewStudent)
	.component('NewTeacher', NewTeacher)
	.mount('#app');
