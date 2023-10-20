const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      nickName: '',
    };
  },

  methods: {
    submitForm(event) {
      event.preventDefault();
      alert('Submited');
    },

    increment(num) {
      this.counter += num;
    },
    decrement(num) {
      this.counter -= num;
    },
    setName(event) {
      this.name = event.target.value;
    },

    setNickName(event, suffix) {
      this.nickName = event.target.value + ' ' + suffix;
    },
  },
});

app.mount('#events');
