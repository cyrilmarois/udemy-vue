<template>
  <ul>
    <li v-for="storedResource in storedResources" :key="storedResource.id">
      <p>
        <span>Title</span>: <span>{{ storedResource.title }}</span>
      </p>
      <p>
        <span>Description</span>: <span>{{ storedResource.description }}</span>
      </p>
      <p>
        <span>Resource</span>:
        <span>
          <a :href="storedResource.link">{{ storedResource.link }}</a>
        </span>
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js document',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn Google',
          link: 'https://google.com',
        },
      ],
    };
  },
};
</script>
