<template>
  <section>
    <BaseCard>
      <h1>AUTHOR</h1>
      <template #header>
        <h3>Angie Serinet</h3>
        <base-badge type="author" caption="AUTHOR"></base-badge>
      </template>
      <p>WRITING is mine</p>
    </BaseCard>
  </section>
</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
  components: {
    BaseCard,
  },
  props: ['fullName', 'infoText', 'role'],
};
</script>
