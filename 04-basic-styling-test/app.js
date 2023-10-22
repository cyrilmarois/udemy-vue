const app = Vue.createApp({
  data() {
    return {
      inputUserClass: '',
      toggleButton: true,
      userInputBackgroundColor: '',
    };
  },
  computed: {
    userParagraphClasses() {
      return {
        user1: this.inputUserClass === 'user1',
        user2: this.inputUserClass === 'user2',
        visible: this.toggleButton,
        hidden: !this.toggleButton,
      };
    },
  },
  methods: {
    toggleParagraphDisplay() {
      return (this.toggleButton = !this.toggleButton);
    },
  },
});

app.mount('#assignment');
