<template>
  <section class="container">
    <div class="card">
      <h2>{{ userA.name }}</h2>
      <h3> {{ userA.age }}</h3>
      <div>
        <button type="button" @click="updateUserA">
          Update user Info
        </button>
      </div>
    </div>
    <div class="card">
      <h2>{{ userB.name }}</h2>
      <h3> {{ userB.age }}</h3>

      <div>
        <button type="button" @click="updateUserB">
          Update user Info
        </button>
      </div>
    </div>

  </section>
</template>

<script setup>
import {ref, reactive} from 'vue'

const userA = ref( {
  name: 'Max',
  age: 31
} );

const userB = reactive( {
  name: 'Michel',
  age: 36,
} );

function updateUserA() {
  userA.value.name = 'Cyril';
  userA.value.age = 37;
}
function updateUserB() {
  userB.name = 'Lauren';
  userB.age = 37;
}

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
  display: flex;
  justify-content: space-evenly
}

.card {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>