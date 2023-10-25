<template>
  <section>
    <BaseCard>
      <h1>ADMIN</h1>
      <template #header>
        <h3>Cyril Marois</h3>
        <base-badge type="admin" caption="ADMIN"></base-badge>
      </template>
      <p>Power is mine</p>
    </BaseCard>
  </section>
</template>

<script>
import BaseCard from './UI/BaseCard.vue';

export default {
  components: {
    BaseCard,
  },
};
</script>
