<template>
  <li>
    <div>
      <header>
        <h3>{{ title }}</h3>
        <button>DELETE</button>
      </header>
    </div>
    <p>
      <span>Description</span>: <span>{{ description }}</span>
    </p>
    <nav>
      <a :href="link">View resource</a>
    </nav>
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
