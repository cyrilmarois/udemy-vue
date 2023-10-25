<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="getExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No data to load
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import axios from 'axios';
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      results: [],
    };
  },
  methods: {
    async getExperiences() {
      try {
        this.isLoading = true;
        this.error = null;
        const res = await axios.get(
          'https://vue-htt-demo-c141a-default-rtdb.europe-west1.firebasedatabase.app/surveys.json'
        );
        this.isLoading = false;
        this.results = res.data;
      } catch (err) {
        this.isLoading = false;
        this.error = err.message;
      }
    },
    // getExperiences() {
    //   this.isLoading = true;
    //   fetch(
    //     'https://vue-htt-demo-c141a-default-rtdb.europe-west1.firebasedatabase.app/surveys.json'
    //   )
    //     .then((res) => {
    //       if (res.status === 200) {
    //         return res.json();
    //       }
    //     })
    //     .then((data) => {
    //       this.isLoading = false;
    //       const results = [];
    //       for (const id in data) {
    //         results.push({
    //           id: id,
    //           name: data[id].name,
    //           rating: data[id].rating,
    //         });
    //       }
    //       this.results = data;
    //     })
    //     .catch((err) => {
    //       this.isLoading = false;
    //       this.error = err.message;
    //     });
    // },
  },
  mounted() {
    this.getExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
