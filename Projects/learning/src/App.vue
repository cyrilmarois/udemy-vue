<template>
  <TheHeader title="Remember the 5th of November..." />
  <TheCourses />
</template>

<script>
import TheCourses from './components/TheCourses.vue';
import TheHeader from './components/layouts/TheHeader.vue';

export default {
  components: {
    TheCourses,
    TheHeader,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
