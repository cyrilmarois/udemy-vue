import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import TheNotFound from './components/TheNotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import App from './App.vue';

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
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
  next();
});
router.afterEach((to, from) => {
  // to and from are both route objects.
  console.log('GLOBAL ROUTER AFTER EACH');
  console.log({ to, from });
  // example logs some data
});

app.use(router);
app.mount('#app');
