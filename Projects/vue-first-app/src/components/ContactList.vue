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
    <button @click="$emit('delete-contact', id)">DELETE</button>
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
  emits: ['toggle-favorite', 'delete-contact'],
  // emits: {
  //   'toggle-favorite': function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.log('ID is missing');
  //       return false;
  //     }
  //   },
  // },
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
