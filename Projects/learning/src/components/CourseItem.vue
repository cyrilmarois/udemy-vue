<template>
  <li>
    <h3>{{ title }}</h3>
    <p>
      <span>Description</span>: <span>{{ description }}</span>
    </p>
    <p>
      <span>Resource</span>:
      <span>
        <a :href="link">{{ link }}</a>
      </span>
    </p>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>
