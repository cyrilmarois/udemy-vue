<template>
    <li>
        <h3>{{ fullName }}</h3>
        <h4>{{ rate }}</h4>
        <div>
            <span v-for="area in areas" :key="area">
                {{ area }}
            </span>
        </div>

        <div class="actions">
            <router-link :to="`/coaches/${id}/contact`">Contact</router-link>
            <router-link :to="`/coaches/${id}`">Details</router-link>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true
        },
        areas: {
            type: Array,
            required: true
        },
        description: {
            type: String,
            required: true,
        },
        hourlyRate: {
            type: Number,
            required: true
        }
    },
    computed: {
        fullName() {
            return `${ this.firstName } ${ this.lastName }`;
        },
        rate() {
            return `$${ this.hourlyRate }`;
        }
    }
}
</script>

<style scoped>
li {
    margin: 1rem 0;
    border: 1px solid #424242;
    border-radius: 12px;
    padding: 1rem;
}

h3 {
    font-size: 1.5rem;
}

h3,
h4 {
    margin: 0.5rem 0;
}

div {
    margin: 0.5rem 0;
}

.actions {
    display: flex;
    justify-content: flex-end;
}
</style>