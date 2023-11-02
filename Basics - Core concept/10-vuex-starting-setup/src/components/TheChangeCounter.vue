<template>
  <button @click="addTen">add 10</button>
</template>

<script>
export default {
  methods: {
    addTen() {
      this.$store.commit('addTen', { value: 10 });
    },
  },
};
</script>
