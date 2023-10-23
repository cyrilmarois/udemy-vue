const app = Vue.createApp({
  data() {
    return {
      toggleContactInfo: true,
      contacts: [
        {
          id: 1,
          firstName: 'Manuel',
          lastName: 'Lorenz',
          phone: '01234 5678 991',
          email: 'manuel@localhost.com',
        },
        {
          id: 2,
          firstName: 'Julie',
          lastName: 'Jones',
          phone: '09876 543 221',
          email: 'julie@localhost.com',
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
  methods: {
    toggleContactDetails() {
      this.toggleContactInfo = !this.toggleContactInfo;
    },
  },
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
