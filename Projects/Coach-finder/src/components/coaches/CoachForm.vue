<template>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{ invalid: !firstName.isValid }">
            <label for="firstName">FirstName*</label>
            <input type="text" id="firstName" v-model.trim="firstName.value" @blur="clearFieldValidity( 'firstName' )">
            <p v-if="!firstName.isValid">FirstName is required </p>
        </div>

        <div class="form-control" :class="{ invalid: !lastName.isValid }">
            <label for="lastName">LastName*</label>
            <input type="text" id="lastName" v-model.trim="lastName.value" @blur="clearFieldValidity( 'lastName' )">
            <p v-if="!lastName.isValid">LastName is required </p>
        </div>
        <div class="form-control" :class="{ invalid: !description.isValid }">
            <label for="description">Description*</label>
            <textarea id="description" v-model.trim="description.value"
                @blur="clearFieldValidity( 'description' )"></textarea>
            <p v-if="!description.isValid">Description is required </p>
        </div>
        <div class="form-control" :class="{ invalid: !rate.isValid }">
            <label for="rate">Hourly Rate*</label>
            <input type="number" id="rate" v-model.number="rate.value" @blur="clearFieldValidity( 'rate' )">
            <p v-if="!rate.isValid">Hourly rate is required</p>
        </div>
        <div class="form-control" :class="{ invalid: !rate.isValid }">
            <h3>Area of expertise*</h3>
            <div>
                <input type="checkbox" id="frontend" value="frontend" v-model="areas.value"
                    @blur="clearFieldValidity( 'areas' )">
                <label for="frontend">Frontend</label>
            </div>
            <div>
                <input type="checkbox" id="backend" value="backend" v-model="areas.value"
                    @blur="clearFieldValidity( 'areas' )">
                <label for="backend">Backend</label>
            </div>
            <div>
                <input type="checkbox" id="career" value="career" v-model="areas.value"
                    @blur="clearFieldValidity( 'areas' )">
                <label for="career">Career</label>
            </div>
            <p v-if="!rate.areas">Areas is required</p>
        </div>
        <p v-if="!isFormValid">
            Please fix the errors above
        </p>
        <div>
            <base-button mode="outlined">Register</base-button>
        </div>
    </form>
</template>

<script>
export default {
    emits: [ 'register-coach' ],
    data() {
        return {
            firstName: {
                value: '',
                isValid: true
            },
            lastName: {
                value: '',
                isValid: true
            },
            description: {
                value: '',
                isValid: true
            },
            rate: {
                value: null,
                isValid: true
            },
            areas: {
                value: [],
                isValid: true
            },
            isFormValid: true,
        }
    },
    methods: {
        validateForm() {
            this.isFormValid = true;
            if ( this.firstName.value === '' ) {
                this.firstName.isValid = false;
                this.isFormValid = false;
            }
            if ( this.lastName.value === '' ) {
                this.lastName.isValid = false;
                this.isFormValid = false;
            }
            if ( this.description.value === '' ) {
                this.description.isValid = false;
                this.isFormValid = false;
            }
            if ( !this.rate.value || this.rate.value < 0 ) {
                this.rate.isValid = false;
                this.isFormValid = false;
            }
            if ( this.areas.value.length === 0 ) {
                this.areas.isValid = false;
                this.isFormValid = false;
            }
        },
        submitForm() {
            this.validateForm();
            if ( !this.isFormValid ) {
                return;
            }
            const formData = {
                firstName: this.firstName.value,
                lastName: this.lastName.value,
                description: this.description.value,
                hourlyRate: this.rate.value,
                areas: this.areas.value,
            };

            this.$emit( 'register-coach', formData );

            this.$router.replace( '/coaches' );
        },
        clearFieldValidity( fieldName ) {
            this[ fieldName ].isValid = true;
        }

    },
}
</script>

<style scoped>
.form-control {
    margin: 0.5rem 0;
}

label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input[type='checkbox']+label {
    font-weight: normal;
    display: inline;
    margin: 0 0 0 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
}

input:focus,
textarea:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
}

input[type='checkbox'] {
    display: inline;
    width: auto;
    border: none;
}

input[type='checkbox']:focus {
    outline: #3d008d solid 1px;
}

h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
}

.invalid label,
.invalid p {
    color: red;
}

.invalid input,
.invalid textarea {
    border: 1px solid red;
}
</style>