import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router";
import App from './App.vue'
import Home from "@/components/Home/index.vue";
import UserList from "@/components/User/list.vue";
import Add from "@/components/User/add.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/users', component: UserList },
  { path: '/user/add', component: Add },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
