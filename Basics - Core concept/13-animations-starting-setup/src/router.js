import { createRouter, createWebHistory } from 'vue-router';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'users',
      path: '/users',
      component: AllUsers,
    },
    { name: 'courses', path: '/courses', component: CourseGoals },
  ],
});

export default router;
