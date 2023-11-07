<template>
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>
  <input type="text" ref="userName" />
  <button @click="addUser">Add User</button>
</template>

<script>
export default {
  data() {
    return {
      users: ['Cyril', 'Angie', 'Jonathan', 'Karo'],
    };
  },
  methods: {
    addUser() {
      this.users.unshift(this.$refs.userName.value);
    },
    removeUser(user) {
      this.users = this.users.filter((userTmp) => userTmp !== user);
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
}

li {
  border: 1px solid aquamarine;
  padding: 1rem 1rem;
  text-align: center;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-active {
  transition: all 1500ms ease-out;
}
.user-list-leave-active {
  transition: all 1500ms ease-in;
  position: absolute;
}
.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0px);
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.user-list-move {
  transition: transform 1000ms ease;
}
</style>
