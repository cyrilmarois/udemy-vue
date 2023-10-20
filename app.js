const app = Vue.createApp({
  data() {
    // same as data: function() {}
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: 'Master Vue and build some apps!',
      vueLink: 'https://vue.js.org',
    };
  },

  methods: {
    outputGoals() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount('#user-goal');
