<script setup>
import {computed, ref} from "vue";
import Navbar from "@/components/Navbar/index.vue"
import UserList from './components/User/list.vue';
import Add from './components/User/add.vue';
import NotFound from './components/NotFound/index.vue';
import Home from './components/Home/index.vue';

const routes = {
  '/': Home,
  '/users': UserList,
  '/user/add': Add
}

const currentPath = ref(window.location.pathname)

window.addEventListener('hashchange', () => {
  console.log(window.location);
  currentPath.value = window.location.pathname;
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <div class="container mx-auto">
    <Navbar />
    <component :is="currentView" />
  </div>
</template>

<style scoped></style>
