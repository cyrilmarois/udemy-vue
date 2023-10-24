import { createApp } from 'vue';

import App from './App.vue';
import ContactList from './components/ContactList.vue';
import ContactForm from './components/ContactForm.vue';

const app = createApp(App);

app.component('contact-list', ContactList);
app.component('contact-form', ContactForm);
app.mount('#app');
