<template>
  <button @click="addTen">add 10</button>
  <button @click="increment10({ value: 11 })">add 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    addTen() {
      this.$store.dispatch('increment10', { value: 10 });
    },
    ...mapActions(['increment10']),
  },
};
</script>
