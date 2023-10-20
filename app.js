const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },

  methods: {
    increment(num) {
      this.counter += num;
    },
    decrement(num) {
      this.counter -= num;
    },
    setName(event) {
      console.log({ event });
      this.name = event.target.value;
    },
  },
});

app.mount('#events');
