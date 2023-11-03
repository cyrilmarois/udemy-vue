import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

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
      path: '/teams',
      component: TeamsList,
    },
    { path: '/teams/:teamId', component: TeamMembers, props: true },
    {
      path: '/users',
      component: UsersList,
    },
  ],
  linkActiveClass: 'active',
});

app.use(router);
app.mount('#app');
