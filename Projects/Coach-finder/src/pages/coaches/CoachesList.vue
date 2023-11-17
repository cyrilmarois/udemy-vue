<template>
    <section>FILTER</section>
    <section>
        <div class="controls">
            <button>refresh</button>
            <router-link to="/register">REGISTRATION</router-link>
        </div>
        <ul v-if="hasCoaches">
            <li v-for="filteredCoach in filteredCoaches" :key="filteredCoach.id">
                <CoachItem :="filteredCoach" />
            </li>
        </ul>
        <h3 v-else>
            No coaches found
        </h3>
    </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
    components: {CoachItem},
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

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.controls {
    display: flex;
    justify-content: space-between;
}
</style>