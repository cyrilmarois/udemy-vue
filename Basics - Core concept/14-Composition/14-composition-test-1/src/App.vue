<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <p v-if="isGoalVisibleRef">{{ courseGoalRef }}</p>
  <p v-if="courseGoalRefObject.isGoalVisible">{{ courseGoalRefObject.courseGoal }}</p>
  <p v-if="courseGoalReactive.isGoalVisible">{{ courseGoalReactive.courseGoal }}</p>
  <h3>OUTPUT COURSE GOAL</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoalVisibility">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script setup>
import {ref, reactive} from 'vue';

const courseGoalRef = ref( 'Mastering Vue' );
const isGoalVisibleRef = ref( true );

const courseGoalRefObject = ref( {
  courseGoal: 'Ref object mastering vue',
  isGoalVisible: true
} )

const courseGoalReactive = reactive( {
  courseGoal: 'Reactive object mastering vue',
  isGoalVisible: true
} );

function toggleGoalVisibility() {
  isGoalVisibleRef.value = !isGoalVisibleRef.value;
  courseGoalRefObject.value.isGoalVisible = !courseGoalRefObject.value.isGoalVisible
  courseGoalReactive.isGoalVisible = !courseGoalReactive.isGoalVisible
  console.log( isGoalVisibleRef.value );
}

</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 3rem;
  text-align: center;
}
</style>