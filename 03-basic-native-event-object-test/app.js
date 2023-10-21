const app = Vue.createApp({
  data() {
    return {
      counter: (int = 0),
    };
  },
  watch: {
    result(value) {
      const self = this;
      if (value === 37) {
        setTimeout(() => {
          self.counter = 0;
        }, 5000);
      }
    },
  },
  computed: {
    result() {
      console.log({ counter: this.counter });
      if (this.counter < 37) {
        return 'Not there yet';
      } else if (this.counter > 37) {
        return 'Too much!';
      } else {
        return this.counter;
      }
    },
  },

  methods: {
    add(num) {
      this.counter += num;
    },
  },
});
app.mount('#assignment');
