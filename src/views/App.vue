<template>
  <div id="app" class="bg-gray-600 text-gray-100 min-h-screen">
    <Sidebar />
    <HelloWorld v-if="showHelloWorld" msg="Sistema de Gestão de Escola" />
    <router-view />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import HelloWorld from '../components/HelloWorld.vue';

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
  },
  computed: {
    showHelloWorld() {
      return this.$route.path === '/';
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
