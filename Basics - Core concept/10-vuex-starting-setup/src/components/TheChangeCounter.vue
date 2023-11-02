<template>
  <button @click="addTen">add 10</button>
</template>

<script>
export default {
  methods: {
    addTen() {
      this.$store.dispatch('increment10', { value: 10 });
    },
  },
};
</script>
