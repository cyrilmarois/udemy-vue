<template>
  <li>
    <h2>
      {{ firstName }} {{ lastName }}
      {{ isFavorite ? '*' : '' }}
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
      type: Number,
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
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      toggleContactInfo: true,
    };
  },
  methods: {
    toggleContactDetails() {
      this.toggleContactInfo = !this.toggleContactInfo;
    },
    toggleFavoriteContact() {
      this.$emit('toggle-favorite', this.id);
    },
  },
};
</script>
