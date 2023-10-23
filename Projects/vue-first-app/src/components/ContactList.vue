<template>
  <li :key="contact.id">
    <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
    <button @click="toggleContactDetails">
      {{ toggleContactInfo ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="toggleContactInfo">
      <li><strong>Phone:</strong> {{ contact.phone }}</li>
      <li><strong>Email:</strong> {{ contact.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      toggleContactInfo: true,
      contact: {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        phone: '01 02 03 04 05',
        email: 'jefaismestests@gomail.com',
      },
    };
  },
  methods: {
    toggleContactDetails() {
      this.toggleContactInfo = !this.toggleContactInfo;
    },
  },
};
</script>
