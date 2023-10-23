import { createApp } from 'vue';

import App from './App.vue';
import ContactList from './components/ContactList.vue';

const app = createApp(App);

app.component('contact-list', ContactList);
app.mount('#app');
