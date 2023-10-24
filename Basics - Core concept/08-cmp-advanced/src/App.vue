<template>
  <div>
    <TheHeader />
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></UserInfo>
    <BadgeList />
    <keep-alive>
      <component :is="activeBadge"></component>
    </keep-alive>
  </div>
</template>

<script>
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import AuthorInfo from './components/AuthorInfo.vue';
import AdminInfo from './components/AdminInfo.vue';
import TheHeader from './components/TheHeader.vue';

export default {
  components: {
    AdminInfo,
    AuthorInfo,
    BadgeList,
    UserInfo,
    TheHeader,
  },
  provide() {
    return {
      selectBadge: this.selectActiveBadge,
    };
  },
  data() {
    return {
      activeBadge: null,
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    selectActiveBadge(type) {
      console.log(type);
      if (type === 'admin') {
        this.activeBadge = 'admin-info';
      } else if (type === 'author') {
        this.activeBadge = 'author-info';
      }
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
