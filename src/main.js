import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue'
// router 쓰일 Component
import Home from './views/Home.vue';
import About from './views/About.vue';
import User from './views/User.vue';
import UserDetail from './views/UserDetail.vue';

//routes 정하기
const routes = [    
  { path : '/', component: Home, name:"home"},
  { path : '/about', component: About, name:'about2' },
  { path : '/user', component: User },
  { path : '/user/:id', component: UserDetail, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
