<template>
  <header>ADD PERSON</header>
  <div>
    <form @submit.prevent="addPerson">
      <div>
        <label for="inputName">Name</label>
        <input type="text" v-model="inputName" />
      </div>
      <div>
        <label for="inputAge">Age</label>
        <input type="text" v-model="inputAge" />
      </div>
      <div>
        <button type="submit">Créer</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputName: '',
      inputAge: '',
    };
  },
  emits: ['add-contact'],
  methods: {
    addPerson() {
      console.log(this.inputName, this.inputAge);

      this.$emit('add-contact', this.inputName, this.inputAge);
    },
  },
};
</script>
