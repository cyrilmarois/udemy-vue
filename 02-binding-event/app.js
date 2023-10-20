const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
      nickName: '',
    };
  },

  methods: {
    submitForm(event) {
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
    confirmedInput() {
      this.confirmedName = this.name;
    },

    setNickName(event, suffix) {
      this.nickName = event.target.value + ' ' + suffix;
    },
  },
});

app.mount('#events');
