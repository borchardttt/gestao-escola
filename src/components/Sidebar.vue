<template>
	<div>
		<nav>
			<ul id="slide-out" class="side-nav">
				<li><router-link to="/cadastrar-sala">Nova Sala</router-link></li>
				<li><router-link to="/novo-aluno">Novo Aluno</router-link></li>
				<li><router-link to="/novo-professor">Novo Professor</router-link></li>
			</ul>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'Sidebar',
}
</script>
