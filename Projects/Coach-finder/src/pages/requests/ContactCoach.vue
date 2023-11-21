<template>
    <div>
        <form @submit.prevent="submitForm">
            <div class="form-control" :class="{ invalid: email.isInvalid }">
                <label for="email">Email</label>
                <input type="email" id="email" v-model.trim="email.value" @blur="clearFieldValidity( 'email' )">
                <p v-if="email.isInvalid">Email is required</p>
            </div>
            <div class="form-control" :class="{ invalid: message.isInvalid }">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="5" v-model.trim="message.value"
                    @blur="clearFieldValidity( 'message' )"></textarea>
                <p v-if="message.isInvalid">Message is required</p>
            </div>
            <div class="actions">
                <base-button>Send Message</base-button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isFormValid: true,
            email: {
                value: '',
                isInvalid: false,
            },
            message: {
                value: '',
                isInvalid: false,
            },
        }
    },
    methods: {
        submitForm() {
            this.validateForm();
            if ( !this.isFormValid ) {
                return;
            }
            this.$store.dispatch( 'requests/contactCoach', {
                coachId: this.$route.params.id,
                email: this.email.value,
                message: this.message.value,
            } );
            this.$router.replace( '/coaches' );
            // TODO implement feedback to the user
        },
        validateForm() {
            this.isFormValid = true;
            if ( this.email.value === '' ) {
                this.email.isInvalid = true;
                this.isFormValid = false;
            }
            if ( this.email.message === '' ) {
                this.message.isInvalid = true;
                this.isFormValid = false;
            }
        },
        clearFieldValidity( fieldName ) {
            this[ fieldName ].isInvalid = false;
        }
    }
}
</script>
<style scoped>
form {
    margin: 1rem;
    border: 1px solid #ccc;
    border-radius: 12px;
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

.invalid label,
.invalid p {
    color: red;
}

.invalid input,
.invalid textarea {
    border: 1px solid red;
}

.actions {
    text-align: center;
}
</style>