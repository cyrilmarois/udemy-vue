<template>
  <li :key="id">
    <h2>
      {{ firstName }} {{ lastName }}
      {{ isFavoriteContact === '1' ? '*' : '' }}
    </h2>
    <button @click="toggleContactDetails">
      {{ toggleContactInfo ? 'Hide' : 'Show' }} Details
    </button>
    <button @click="toggleFavoriteContact">Toggle favorite</button>
    <ul v-if="toggleContactInfo">
      <li><strong>Phone:</strong> {{ phone }}</li>
      <li><strong>Email:</strong> {{ email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ['id', 'firstName', 'lastName', 'phone', 'email', 'isFavorite'],
  props: {
    id: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: String,
    email: String,
    isFavorite: {
      type: String,
      required: false,
      default: '0', // or any function
      validator: function (value) {
        return value === '0' || value === '1';
      },
    },
  },
  data() {
    return {
      toggleContactInfo: true,
      isFavoriteContact: this.isFavorite,
    };
  },
  methods: {
    toggleContactDetails() {
      this.toggleContactInfo = !this.toggleContactInfo;
    },
    toggleFavoriteContact() {
      if (this.isFavoriteContact === '1') {
        this.isFavoriteContact = '0';
      } else {
        this.isFavoriteContact = '1';
      }
    },
  },
};
</script>
