<template>
  <TheHeader title="Remember the 5th of November..." />
  <CourseList :courses="storedResources" />
</template>

<script>
import CourseList from './components/CourseList.vue';
import TheHeader from './components/layouts/TheHeader.vue';

export default {
  components: {
    CourseList,
    TheHeader,
  },

  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js document',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn Google',
          link: 'https://google.com',
        },
      ],
    };
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
