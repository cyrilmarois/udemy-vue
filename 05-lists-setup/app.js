const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.userInput);
      console.log({ goals: this.goals });
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount('#user-goals');
