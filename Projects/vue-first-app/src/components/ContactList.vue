<template>
  <li :key="id">
    <h2>{{ firstName }} {{ lastName }}</h2>
    <button @click="toggleContactDetails">
      {{ toggleContactInfo ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="toggleContactInfo">
      <li><strong>Phone:</strong> {{ phone }}</li>
      <li><strong>Email:</strong> {{ email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'phone', 'email'],
  data() {
    return {
      toggleContactInfo: true,
    };
  },
  methods: {
    toggleContactDetails() {
      this.toggleContactInfo = !this.toggleContactInfo;
    },
  },
};
</script>
