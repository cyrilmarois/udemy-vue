<template>
  <base-card>
    <base-button
      @click="selectTab('course-list')"
      :mode="tabSelected === 'course-list' ? null : 'flat'"
      >Courses List</base-button
    >
    <base-button
      @click="selectTab('add-course')"
      :mode="tabSelected === 'add-course' ? null : 'flat'"
      >Add course</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="tabSelected" />
  </keep-alive>
</template>

<script>
import AddCourse from './AddCourse.vue';
import CourseList from './CourseList.vue';

export default {
  components: {
    AddCourse,
    CourseList,
  },
  provide() {
    return {
      courses: this.storedResources,
    };
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
      tabSelected: 'course-list',
    };
  },
  methods: {
    selectTab(tab) {
      if (tab === 'course-list') {
        this.tabSelected = 'course-list';
      } else if (tab === 'add-course') {
        this.tabSelected = 'add-course';
      }
    },
  },
};
</script>
