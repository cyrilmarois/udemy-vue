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
      results: [],
    };
  },
  methods: {
    async getExperiences() {
      this.isLoading = true;
      const res = await axios.get(
        'https://vue-htt-demo-c141a-default-rtdb.europe-west1.firebasedatabase.app/surveys.json'
      );
      setTimeout(() => {
        this.isLoading = false;
      }, 5000);
      this.results = res.data;
    },
    // getExperiences() {
    //   fetch(
    //     'https://vue-htt-demo-c141a-default-rtdb.europe-west1.firebasedatabase.app/surveys.json'
    //   )
    //     .then((res) => {
    //       if (res.status === 200) {
    //         return res.json();
    //       }
    //     })
    //     .then((data) => {
    //       const results = [];
    //       for (const id in data) {
    //         results.push({
    //           id: id,
    //           name: data[id].name,
    //           ratings: data[id].ratings,
    //         });
    //       }
    //       this.results = data;
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
