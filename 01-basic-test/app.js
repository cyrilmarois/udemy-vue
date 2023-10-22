const app = Vue.createApp({
  data() {
    return {
      name: 'besrow',
      age: 37,
      ageOlder: this.age + 5,
      randomNum: Math.random(),
      pictureLink:
        'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
      content: 'Bordel de merde Morty',
      counter: 0,
    };
  },

  methods: {
    calculateOlderAge() {
      return (this.ageOlder = this.age + 5);
    },
  },
});

app.mount('#events');
