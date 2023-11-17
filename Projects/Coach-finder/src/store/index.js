import { createStore } from 'vuex';
import CoachesModule from './modules/coaches/index.js';
import RequestsModule from './modules/requests/index.js';

const store = createStore({
  modules: {
    CoachesModule,
    RequestsModule,
  },
});

export default store;
