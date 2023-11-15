
<template>
  <section class="container">
    <div class="card">
      <user-data :last-name="lastName" :first-name="firstName" :age="userA.age" />
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
    <div class="card">
      {{ userInfo }}
      <div>
        <input type="text" name="firstName" placeholder="firstName" @input="setFirstName">
        <input type="text" name="lastName" placeholder="lastName" ref="inputLastName">
        <input type="text" name="nickName" placeholder="nickName" v-model.trim="nickName">
        <button @click="setLastName">Set Lastname</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref, reactive, computed, watch} from 'vue'
import UserData from './components/UserData.vue';

const firstName = ref( null );
const lastName = ref( null );
const nickName = ref( null );
const inputLastName = ref( null );

const userA = ref( {
  name: 'Max',
  age: 31
} );

const userB = reactive( {
  name: 'Michel',
  age: 36,
} );

watch( nickName, function ( newValue, oldValue ) {
  console.log( 'old value :', newValue );
  console.log( 'new value :', oldValue );
} );
watch( [ firstName, lastName, ], function ( newValues, oldValues ) {
  console.log( 'old value firstName :', oldValues[ 0 ] );
  console.log( 'new value firstName :', newValues[ 0 ] );
  console.log( 'old value lastName :', oldValues[ 1 ] );
  console.log( 'new value lastName :', newValues[ 1 ] );
} );

const userInfo = computed( function () {
  return `${ firstName.value } ${ lastName.value } knows as ${ nickName.value }`;
} );

function updateUserA() {
  userA.value.name = 'Cyril';
  userA.value.age = 37;
}
function updateUserB() {
  userB.name = 'Lauren';
  userB.age = 37;
}

function setFirstName( event ) {
  console.log( {event} )
  firstName.value = event.target.value;
  console.log( {firstName} )
}

function setLastName() {
  lastName.value = inputLastName.value.value;
  console.log( {lastName} )
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