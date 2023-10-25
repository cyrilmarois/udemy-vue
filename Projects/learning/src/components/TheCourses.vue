<template>
  <base-card>
    <base-button
      @click="selectTab('course-list')"
      :mode="storedCourseButtonMode"
      >Courses List</base-button
    >
    <base-button @click="selectTab('add-course')" :mode="addCourseButtonMode"
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
      addCourse: this.addCourse,
      deleteCourse: this.deleteCourse,
    };
  },
  computed: {
    storedCourseButtonMode() {
      return this.tabSelected === 'course-list' ? null : 'flat';
    },
    addCourseButtonMode() {
      return this.tabSelected === 'add-course' ? null : 'flat';
    },
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
    addCourse(title, description, url) {
      console.log(title, description, url);
      const newCourse = {
        id: title,
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newCourse);
      console.log(this.storedResources);
      this.tabSelected = 'course-list';
    },
    deleteCourse(idx) {
      const courseIdx = this.storedResources.findIndex(
        (course) => course.id === idx
      );
      this.storedResources.splice(courseIdx, 1);
    },
  },
};
</script>
