import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'tasks',
    component: ()=> import ('../views/TaskView.vue')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import( '../views/AddTaskView.vue')
  },
  {
    path:'/update/:id',
    name:'update',
    component: () => import('../views/UpdateView.vue')
  },
  {
    path:"/sign-up",
    name:"sign-up",
    component: ()=> import ('../views/SignUp.vue')
  },
  {
    path:"/login",
    name:'login',
    component: ()=> import ('../views/LoginUser.vue')
  },
  {
    path:"/user",
    name:"user",
    component: ()=> import('../views/UserView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
