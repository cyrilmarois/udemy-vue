<template>
  <h2><header>CONTACTS</header></h2>
  <contact-form @add-contact="addContact" />
  <contact-list
    v-for="contact in contacts"
    :key="contact.id"
    v-bind="contact"
    @toggle-favorite="toggleFavoriteStatus"
    @delete-contact="deleteContact"
  ></contact-list>
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
          email: 'johndoe@gmail.com',
          phone: '01 02 03 04 05',
          isFavorite: true,
        },
        {
          id: 2,
          firstName: 'Jane',
          lastName: 'Doey',
          phone: '06 07 08 09 00',
          email: 'janedoey@gmail.com',
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(contactId) {
      const targetContact = this.contacts.find(
        (contact) => contact.id === contactId
      );
      targetContact.isFavorite = !targetContact.isFavorite;
      console.log(targetContact);
    },
    addContact(contactInfo) {
      console.log({ contactInfo });
      let tmpContact = contactInfo;
      tmpContact = { id: this.contacts.length + 1, ...tmpContact };
      console.log({ tmpContact });
      this.contacts.push(tmpContact);
    },
    deleteContact(idx) {
      this.contacts = this.contacts.filter((contact) => contact.id !== idx);
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
