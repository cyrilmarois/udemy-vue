import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'home', path: '/', redirect: '/coaches' },
    { name: 'coaches', path: '/coaches', component: null },
    {
      name: 'coachDetails',
      path: '/coaches/:id',
      component: null,
      children: [
        {
          name: 'contact',
          path: '/contact', // coaches/c1/contact
          component: null,
        },
      ],
    },
    { name: 'registerCoach', path: '/register', component: null },
    { name: 'requests', path: '/requests', component: null },
    { name: 'notFound', path: '/:notFound(.*+)', component: null },
  ],
});

export default router;
