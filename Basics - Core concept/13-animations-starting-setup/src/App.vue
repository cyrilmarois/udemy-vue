<template>
  <div class="container">
    <router-view v-slot="slotProps">
      <keep-alive>
        <transition name="router" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </keep-alive>
    </router-view>
  </div>
  <div class="container">
    <UsersLists />
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animateBlock }"></div>
    <button @click="animate">Animate</button>
  </div>
  <div class="container">
    <!-- <transition name="para" enter-to-class="..." enter-active-class="..."> -->
    <transition
      css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @after-enter="afterEnter"
      @leave="leave"
      @after-leave="afterLEave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <p v-if="isPVisible">This is only sometimes visible...</p>
    </transition>
    <button type="button" @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="show-user" mode="out-in">
      <button @click="showUsers" v-if="!canShowUsers">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :openDialog="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
import UsersLists from './components/UsersList.vue';

export default {
  components: { UsersLists },
  data() {
    return {
      animateBlock: false,
      isPVisible: false,
      dialogIsVisible: false,
      canShowUsers: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animate() {
      this.animateBlock = true;
    },
    toggleParagraph() {
      this.isPVisible = !this.isPVisible;
    },
    showUsers() {
      this.canShowUsers = true;
    },
    hideUsers() {
      this.canShowUsers = false;
    },
    enterCancelled(el) {
      console.log('ENTER_CANCELLED', el);
      clearInterval(this.enterInterval);
    },
    leaveCancelled(el) {
      console.log('LEAVE_CANCELLED', el);
      clearInterval(this.leaveInterval);
    },
    beforeEnter(el) {
      console.log('BEFORE_ENTER', el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('ENTER', el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round === 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 50);
    },
    afterEnter(el) {
      console.log('POST_ENTER', el);
    },
    beforeLeave(el) {
      console.log('BEFORE_LEAVE', el);
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log('LEAVE', el);
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round === 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 50);
    },
    afterLEave(el) {
      console.log('POST_LEAVE', el);
    },
  },
};
</script>

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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 500ms ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: smurf 500ms ease-out forwards;
}

.modal-enter-active {
  animation: modal 500ms ease-in;
}

.show-user-enter-from,
.show-user-leave-to {
  opacity: 0;
}
.show-user-enter-active {
  transition: opacity 1000ms ease-out;
}
.show-user-leave-active {
  transition: opacity 1000ms ease-in;
}
.show-user-enter-to,
.show-user-leave-from {
  opacity: 1;
}

.router-enter-from {
  opacity: 0;
}
.router-enter-active {
  transition: opacity 2000ms ease-in;
}
.router-enter-to {
  opacity: 1;
}

@keyframes smurf {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
