<template>
  <form @submit.prevent="submit">
    <div
      class="form-control"
      :class="{ error: inputNameValidity === 'invalid' }"
    >
      <label for="user-name">Your Name</label>
      <input
        id="user-name"
        name="user-name"
        type="text"
        v-model.trim="inputName"
        @blur="checkInputName"
      />
      <p class="error" v-if="inputNameValidity === 'invalid'">
        Just put a fuckin name
      </p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" type="number" v-model="inputAge" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="inputReferrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input
          id="interest-news"
          name="interest"
          type="checkbox"
          value="news"
          v-model="inputInterests"
        />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          id="interest-tutorials"
          name="interest"
          type="checkbox"
          value="tutorials"
          v-model="inputInterests"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input
          id="interest-nothing"
          name="interest"
          type="checkbox"
          value="nothing"
          v-model="inputInterests"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input
          id="how-video"
          name="how"
          type="radio"
          value="video"
          v-model="inputLearning"
        />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input
          id="how-blogs"
          name="how"
          type="radio"
          value="blogs"
          v-model="inputLearning"
        />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input
          id="how-other"
          name="how"
          type="radio"
          value="other"
          v-model="inputLearning"
        />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-label">
      <RatingControl v-model="inputRating" />
    </div>
    <div class="form-control">
      <input
        type="checkbox"
        name="confirm"
        id="confirm"
        v-model="inputConfirm"
      />
      <label for="confirm">Agreed on CGU</label>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
import RatingControl from './RatingControl.vue';

export default {
  components: { RatingControl },
  data() {
    return {
      inputName: '',
      inputAge: null,
      inputReferrer: 'wom',
      inputInterests: [],
      inputLearning: null,
      inputConfirm: false,
      inputNameValidity: 'pending',
      inputRating: null,
    };
  },
  methods: {
    submit() {
      console.log({
        inputName: this.inputName,
        inputAge: this.inputAge,
        inputReferrer: this.inputReferrer,
        inputInterests: this.inputInterests,
        inputLearning: this.inputLearning,
        inputConfirm: this.inputConfirm,
        inputRating: this.inputRating,
      });
      this.reset();
    },
    checkInputName() {
      if (this.inputName === '') {
        this.inputNameValidity = 'invalid';
      } else {
        this.inputNameValidity = 'valid';
      }
    },
    reset() {
      this.inputName = '';
      this.inputAge = null;
      this.inputReferrer = 'wom';
      this.inputInterests = [];
      this.inputLearning = null;
      this.inputConfirm = false;
      this.inputRating = null;
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.error input {
  border-color: red;
}
.error {
  color: red;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>
