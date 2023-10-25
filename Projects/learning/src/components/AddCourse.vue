<template>
  <base-card>
    <form @submit.prevent="addCourse">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" v-model="title" />
      </div>
      <div class="form-control">
        <label for="description"></label>
        <textarea
          id="description"
          name="description"
          rows="3"
          v-model="description"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="text" id="link" name="link" v-model="link" />
      </div>
      <div>
        <base-button>Add course</base-button>
      </div>
    </form>
  </base-card>
</template>
<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      link: '',
    };
  },
  methods: {
    addCourse() {
      console.log(this.title, this.description, this.link);
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
