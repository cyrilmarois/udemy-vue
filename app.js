const app = Vue.createApp({
  data() {
    // same as data: function() {}
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://vue.js.org',
    };
  },

  methods: {
    outputGoals() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return 'Learn Vue!';
      } else {
        return 'Master Vue!';
      }
    },
  },
});

app.mount('#user-goal');
