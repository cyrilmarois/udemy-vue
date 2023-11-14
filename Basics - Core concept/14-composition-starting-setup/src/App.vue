<template>
  <section class="container">
    <div>
      <h2>{{ userA.name }}</h2>
      <h3> {{ userA.age }}</h3>
    </div>
    <div>
      <h2>{{ userB.name }}</h2>
      <h3> {{ userB.age }}</h3>
    </div>
  </section>
</template>

<script setup>
import {ref, reactive} from 'vue'

// const userName = ref( 'Maximilian' );
// const age = ref( 37 );

const userA = ref( {
  name: 'Max',
  age: 31
} );

const userB = reactive( {
  name: 'Michel',
  age: 36,
} );

setTimeout( () => {
  userA.value.name = 'Cyril';
  userA.value.age = 37;

  userB.name = 'Lauren';
  userB.age = 37;
}, 2000 );

</script >

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>