const app = Vue.createApp({
  data() {
    return {
      content: '',
      finalContent: '',
    };
  },

  methods: {
    showAlertOnce() {
      alert('U cliked me once !');
    },
    showAlertAlways() {
      alert('U still click me !');
    },

    setContent(event) {
      this.content = event.target.value;
    },
    setFinalContent(event) {
      this.finalContent = event.target.value;
    },
  },
});

app.mount('#events');
