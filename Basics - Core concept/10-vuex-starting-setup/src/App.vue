<template>
  <base-container title="Vuex">
    <the-counter />
    <button @click="increment">Increment</button>
    <the-change-counter />
  </base-container>
  <base-container title="Auth">
    <user-auth />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import TheChangeCounter from './components/TheChangeCounter.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    TheChangeCounter,
    UserAuth,
  },
  methods: {
    increment() {
      // this.$store.commit('addOne');
      this.$store.dispatch('increment');
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
