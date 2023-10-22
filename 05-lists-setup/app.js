const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      goals: [],
    };
  },
  methods: {
    addGoals() {
      this.goals.push(this.userInput);
      console.log({ goals: this.goals });
    },
  },
});

app.mount('#user-goals');
