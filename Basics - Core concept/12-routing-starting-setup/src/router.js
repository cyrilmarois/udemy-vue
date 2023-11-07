import { createRouter, createWebHistory } from 'vue-router';

import TheNotFound from './pages/TheNotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';
import TeamMembers from './pages/TeamMembers.vue';
import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        }, //teams/t1
      ],
    },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter: (to, from, next) => {
        console.log('USER LOCAL ROUTER BEFORE ENTER');
        console.log({ to, from });
        next();
      },
    },
    { path: '/:notFound(.*)', component: TheNotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  console.log('GLOBAL ROUTER BEFORE EACH');
  console.log({ to, from });
  if (to.meta.needsAuth) {
    console.log('NEEDS AUTH!');
  }
  next();
});
router.afterEach((to, from) => {
  // to and from are both route objects.
  console.log('GLOBAL ROUTER AFTER EACH');
  console.log({ to, from });
  // example logs some data
});

export default router;
