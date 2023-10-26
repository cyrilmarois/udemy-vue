<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
// import axios from 'axios';
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  beforeMount() {
    // axios.post(
    //   'https://vue-htt-demo-c141a-default-rtdb.europe-west1.firebasedatabase.app/coaches.json',
    //   {
    //     id: 'c2',
    //     firstName: 'Angie',
    //     lastName: 'Doey',
    //     areas: ['frontend', 'career'],
    //     description: "I'm Angie and I love cat!",
    //     hourlyRate: 66,
    //   }
    // );
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

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
