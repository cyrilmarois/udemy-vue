<template>
  <ul>
    <CourseItem
      v-for="course in courses"
      :key="course.id"
      :id="course.id"
      :title="course.title"
      :description="course.description"
      :link="course.link"
    >
    </CourseItem>
  </ul>
</template>

<script>
import CourseItem from './CourseItem.vue';

export default {
  components: {
    CourseItem,
  },
  inject: ['courses'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
