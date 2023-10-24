<template>
  <section>
    <BaseCard>
      <template #header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <p>{{ infoText }}</p>
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
