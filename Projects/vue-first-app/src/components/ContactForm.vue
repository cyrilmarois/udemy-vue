<template>
  <form @submit.prevent="addContact">
    <div>
      <label for="firstName"> First Name</label>
      <input type="text" v-model="firstName" />
    </div>
    <div>
      <label for="lastName"> Last Name</label>
      <input type="text" v-model="lastName" />
    </div>
    <div>
      <label for="phone">Phone</label>
      <input type="phone" v-model="phone" />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" v-model="email" />
    </div>
    <button type="submit">Register</button>
  </form>
</template>

<style>
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>

<script>
export default {
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      phone: null,
    };
  },
  emits: ['add-contact'],
  methods: {
    addContact() {
      this.$emit('add-contact', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
      });
    },
  },
};
</script>
