<template>
  <div>{{ normalizedCounter }}</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.normalizedCounter;
    // },
    ...mapGetters(['normalizedCounter']),
  },
};
</script>
