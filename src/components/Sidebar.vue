<template>
  <nav class="bg-gray-800 border-b border-gray-700">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center">
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Escola Web</span>
      </a>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="flex flex-col font-medium md:flex-row md:space-x-8 mt-4 md:mt-0">
          <li>
            <router-link to="/" class="block py-2 pl-3 pr-4 text-gray-100 rounded md:bg-transparent md:text-blue-400 md:p-0" aria-current="page">Home</router-link>
          </li>
          <li>
            <router-link to="/cadastrar-sala" class="block py-2 pl-3 pr-4 text-gray-100 rounded md:bg-transparent md:text-blue-400 md:p-0">Nova Sala</router-link>
          </li>
          <li>
            <router-link to="/novo-aluno" class="block py-2 pl-3 pr-4 text-gray-100 rounded md:bg-transparent md:text-blue-400 md:p-0">Novo Aluno</router-link>
          </li>
          <li>
            <router-link to="/novo-professor" class="block py-2 pl-3 pr-4 text-gray-100 rounded md:bg-transparent md:text-blue-400 md:p-0">Novo Professor</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<style scoped>
/* Adicione qualquer estilo personalizado aqui */
</style>
