const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: (string = ''),
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
  computed: {
    fullname() {
      console.log('Hello alone...');
      if (this.name === '') {
        return '';
      }
      return `${this.name} ZEROOO`;
    },
  },
  methods: {
    outputFullName() {
      console.log('Hello there...');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'HEROOO';
    },

    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
