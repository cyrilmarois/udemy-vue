<template>
  <ul>
    <CourseItem
      v-for="storedResource in storedResources"
      :key="storedResource.id"
      v-bind="storedResource"
    >
    </CourseItem>
  </ul>
</template>

<script>
import CourseItem from './components/CourseItem.vue';

export default {
  components: {
    CourseItem,
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
