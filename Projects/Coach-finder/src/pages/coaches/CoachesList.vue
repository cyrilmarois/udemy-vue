<template>
    <section>
        <CoachFilter @change-filter="setFilters" />
    </section>
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
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
    components: {CoachFilter, CoachItem},
    computed: {
        filteredCoaches() {
            const coaches = this.$store.getters[ 'coaches/coaches' ];
            return coaches.filter( coach => {
                if ( this.activeFilters.frontend && coach.areas.includes( 'frontend' ) ) {
                    return true;
                }
                if ( this.activeFilters.backend && coach.areas.includes( 'backend' ) ) {
                    return true;
                }
                if ( this.activeFilters.career && coach.areas.includes( 'career' ) ) {
                    return true;
                }
                return false;
            } );
        },
        hasCoaches() {
            return this.$store.getters[ 'coaches/hasCoaches' ]
        }
    },
    data() {
        return {
            activeFilters: {
                frontend: true,
                backend: true,
                career: true
            }
        }
    },
    methods: {
        setFilters( filters ) {
            this.activeFilters = filters;
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