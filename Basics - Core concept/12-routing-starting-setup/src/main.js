import { createApp } from 'vue';
import router from './router.js';
import App from './App.vue';

const app = createApp(App);
console.log({ router });
app.use(router);
app.mount('#app');
