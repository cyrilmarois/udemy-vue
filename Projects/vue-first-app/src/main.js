import { createApp } from 'vue';

import App from './App.vue';
import ContactList from './components/ContactList.vue';
import ContactFormVue from './components/ContactForm.vue';

const app = createApp(App);

app.component('contact-list', ContactList);
app.component('contact-form', ContactFormVue);
app.mount('#app');
