const app = Vue.createApp({
  data() {
    return {
      toggleContactInfo: true,
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
  methods: {
    toggleContactDetails() {
      this.toggleContactInfo = !this.toggleContactInfo;
    },
  },
});

app.mount('#app');
