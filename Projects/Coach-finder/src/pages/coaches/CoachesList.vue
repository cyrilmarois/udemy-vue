<template>
    <section>FILTER</section>
    <section>
        <div class="controls">
            <button>refresh</button>
            <router-link to="/register">REGISTRATION</router-link>
        </div>
        <ul v-if="hasCoaches">
            <li v-for="filteredCoach in filteredCoaches" :key="filteredCoach.id">
                {{ filteredCoach.firstName }}
            </li>
        </ul>
        <h3 v-else>
            No coaches found
        </h3>
    </section>
</template>

<script>
export default {
    computed: {
        filteredCoaches() {
            return this.$store.getters[ 'coaches/coaches' ];
        },
        hasCoaches() {
            return this.$store.getters[ 'coaches/hasCoaches' ]
        }
    }
}
</script>