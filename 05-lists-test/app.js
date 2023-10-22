const app = Vue.createApp({
  data() {
    return {
      taskInput: '',
      tasks: [],
      taskDisplay: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.taskDisplay ? 'Hide List' : 'Show list';
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskInput);
    },
    toggleTasks() {
      this.taskDisplay = !this.taskDisplay;
    },
  },
});

app.mount('#assignment');
