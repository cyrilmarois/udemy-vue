<template>
  <button @click="plusOne">add 1</button>
  <button @click="inc10({ value: 11 })">add 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    addTen() {
      this.$store.dispatch('increment10', { value: 10 });
    },
    ...mapActions({ plusOne: 'increment', inc10: 'increment10' }),
  },
};
</script>
