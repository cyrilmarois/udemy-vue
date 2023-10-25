<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" v-model="inputTitle" />
      </div>
      <div class="form-control">
        <label for="description"></label>
        <textarea
          id="description"
          name="description"
          rows="3"
          v-model="inputDescription"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" id="link" name="link" v-model="inputLink" />
      </div>
      <div>
        <base-button type="submit">Add course</base-button>
      </div>
    </form>
  </base-card>
</template>
<script>
export default {
  data() {
    return {
      inputTitle: '',
      inputDescription: '',
      inputLink: '',
    };
  },
  inject: ['addCourse'],
  methods: {
    submitForm() {
      this.addCourse(this.inputTitle, this.inputDescription, this.inputLink);
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
