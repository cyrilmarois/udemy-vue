<template>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return { hasPendingModification: true };
  },
  inject: ['users'],
  beforeRouteEnter(to, from, next) {
    console.log('USERS-LIST CMP BEFORE ROUTE ENTER');
    console.log({ to, from });
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('USERS-LIST CMP BEFORE ROUTE LEAVE');
    if (!this.hasPendingModification) {
      return next();
    } else {
      const canLeavePage = confirm('R U SURE?');
      next(canLeavePage);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
