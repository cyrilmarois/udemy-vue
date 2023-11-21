import { createRouter, createWebHistory } from 'vue-router';
import CoachDetails from './pages/coaches/CoachDetails.vue';
import coachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'home', path: '/', redirect: '/coaches' },
    { name: 'coaches', path: '/coaches', component: coachesList },
    {
      name: 'coachDetails',
      path: '/coaches/:id',
      component: CoachDetails,
      children: [
        {
          name: 'contact',
          path: 'contact', // coaches/c1/contact
          component: ContactCoach,
        },
      ],
    },
    { name: 'registerCoach', path: '/register', component: CoachRegistration },
    { name: 'requests', path: '/requests', component: RequestsReceived },
    { name: 'notFound', path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
