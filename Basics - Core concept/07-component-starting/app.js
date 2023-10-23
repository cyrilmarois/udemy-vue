const app = Vue.createApp({
  data() {
    return {
      contacts: [
        {
          id: null,
          firstName: null,
          lastName: null,
          phone: null,
          email: null,
        },
      ],
      toggleContactLabel: null,
    };
  },
  computed: {
    toggleDetailLabel() {
      return (this.toggleContactLabel = this.toggleContactInfo
        ? 'Show'
        : 'Hide');
    },
  },
  methods: {},
});
app.component('contact-list', {
  template: `<li :key="contact.id">
          <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
          <button @click="toggleContactDetails">
            Show Details
          </button>
          <ul v-if="toggleContactInfo">
            <li><strong>Phone:</strong> {{contact.phone }}</li>
            <li><strong>Email:</strong> {{ contact.email }}</li>
          </ul>
        </li>`,
  data() {
    return {
      contact: {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        phone: '01 02 03 04 05',
        email: 'jefaismestests@gomail.com',
      },
      toggleContactInfo: true,

      isContactDetailsVisible: true,
    };
  },
  methods: {
    toggleContactDetails() {
      this.toggleContactInfo = !this.toggleContactInfo;
    },
  },
});
app.mount('#app');
