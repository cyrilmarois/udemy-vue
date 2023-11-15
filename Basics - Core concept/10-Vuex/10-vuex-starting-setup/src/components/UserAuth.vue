<template>
  <button v-if="!isAuthenticated" @click="loginUser">Login</button>
  <button v-else @click="logoutUser">Logout</button>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      console.log({
        USERAUTH__isAuthenticated: this.$store.getters.isAuthenticated,
      });
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    loginUser() {
      this.$store.dispatch('setIsAuthenticated', { isAuthenticated: true });
    },
    logoutUser() {
      this.$store.dispatch('setIsAuthenticated', { isAuthenticated: false });
    },
  },
};
</script>
