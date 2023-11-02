<template>
  <base-container title="Vuex">
    <the-counter />
    <button @click="increment">Increment</button>
    <the-change-counter />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import TheChangeCounter from './components/TheChangeCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    TheChangeCounter,
  },
  methods: {
    increment() {
      this.$store.commit('addOne');
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
