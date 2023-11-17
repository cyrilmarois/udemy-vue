<template>
    <section>FILTER</section>
    <section>
        <base-card>
            <div class="controls">
                <base-button mode="outline">refresh</base-button>
                <base-button link to="/register">REGISTRATION</base-button>
            </div>
            <ul v-if="hasCoaches">
                <li v-for="filteredCoach in filteredCoaches" :key="filteredCoach.id">
                    <CoachItem :="filteredCoach" />
                </li>
            </ul>
            <h3 v-else>
                No coaches found
            </h3>
        </base-card>
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