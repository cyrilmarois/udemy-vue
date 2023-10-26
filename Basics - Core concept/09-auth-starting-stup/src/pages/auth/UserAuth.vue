<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred" @close="closeModal">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner />
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p v-if="isFormInvalid">Invalid email or password</p>
        <base-button type="submit">{{ switchLoginLabel }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">{{
          switchSignupLabel
        }}</base-button>
      </form>
    </base-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      isFormInvalid: false,
      mode: 'login',
      isLoading: false,
      error: null,
    };
  },
  computed: {
    switchLoginLabel() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'Signup';
      }
    },
    switchSignupLabel() {
      if (this.mode === 'login') {
        return 'Signup instead';
      } else {
        return 'Login instead';
      }
    },
  },
  methods: {
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
    async submitForm() {
      this.isFormInvalid = false;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.isFormInvalid = true;
        return;
      }
      this.isLoading = true;
      const payload = {
        email: this.email,
        password: this.password,
      };

      try {
        // authenticate user
        if (this.mode === 'login') {
          await this.$store.dispatch('login', payload);
        } else {
          await this.$store.dispatch('signup', payload);
        }
        this.$router.replace('/coaches');
      } catch (err) {
        console.log({ err });
        this.error =
          err.message || 'Authentication failed: Invalid username or password';
      }

      this.isLoading = false;
    },
    closeModal() {
      this.error = null;
      console.log({ err: this.error, tErr: !!this.error });
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
