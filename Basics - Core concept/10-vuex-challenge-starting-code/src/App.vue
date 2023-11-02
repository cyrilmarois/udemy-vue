<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      isLoggedIn: this.$store.getters.isAuthenticated,
    };
  },
  methods: {
    login() {
      this.$store.dispatch('login', { isAuthenticated: true });
    },
    logout() {
      this.$store.dispatch('logout', { isAuthenticated: false });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
