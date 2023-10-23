<template>
  <h2>CONTACTS</h2>
  <ul v-for="contact in contacts" :key="contact.id">
    <li>{{ contact.firstName }} {{ contact.lastName }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          phone: '01 02 03 04 05',
          email: 'johndoe@gmail.com',
        },
        {
          id: 2,
          firstName: 'Jane',
          lastName: 'Does',
          phone: '06 07 08 09 00',
          email: 'janedoes@gmail.com',
        },
      ],
    };
  },
};
</script>
