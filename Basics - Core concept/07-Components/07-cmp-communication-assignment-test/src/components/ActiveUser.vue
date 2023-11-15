<template>
  <div>
    <h2>{{ personName }}</h2>
    <h3>{{ personAge }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    personName: {
      type: String,
      required: true,
    },
    personAge: {
      type: String,
      required: true,
    },
  },
};
</script>
