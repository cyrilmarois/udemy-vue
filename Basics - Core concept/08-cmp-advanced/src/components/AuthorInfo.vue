<template>
  <section>
    <BaseCard>
      <h1>AUTHOR</h1>
      <template #header>
        <h3>Angie Serinet</h3>
        <base-badge type="author" caption="AUTHOR"></base-badge>
      </template>
      <p>WRITING is mine</p>
      <input type="text" ref="inputText" />
      <button @click="submitPush">POUSSEZ</button>
      <teleport to="body">
        <Error v-if="inputIsInvalid">
          <h2>input cannot be empty</h2>
          <p>Please provide some content</p>
          <button @click="retry">RETRY</button>
        </Error>
      </teleport>
    </BaseCard>
  </section>
</template>

<script>
import BaseCard from './BaseCard.vue';
import Error from './Error.vue';

export default {
  components: {
    BaseCard,
    Error,
  },
  props: ['fullName', 'infoText', 'role'],
  data() {
    return {
      inputText: '',
      inputIsInvalid: false,
    };
  },
  methods: {
    submitPush() {
      if (this.$refs.inputText.value === '') {
        this.inputIsInvalid = true;
      }
    },
    retry() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
