<template>
  <user-data @add-contact="addContact" />
  <active-user v-bind="person" />
</template>

<script>
export default {
  data() {
    return {
      person: {
        personName: '',
        personAge: '',
      },
    };
  },
  methods: {
    addContact(name, age) {
      this.person.personName = name;
      this.person.personAge = age;
    },
  },
};
</script>
