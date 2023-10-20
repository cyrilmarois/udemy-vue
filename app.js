const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      nickName: '',
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

    setNickName(event, suffix) {
      this.nickName = event.target.value + ' ' + suffix;
    },
  },
});

app.mount('#events');
