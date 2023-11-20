<template>
    <section>
        <CoachFilter @change-filter="setFilters" />
    </section>
    <section>
        <base-card>
            <div class="controls">
                <base-button mode="outline" @click="loadCoaches">refresh</base-button>
                <base-button v-if="!isLoading && !isCoach" link to="/register">REGISTRATION</base-button>
            </div>
            <div v-if="isLoading">
                <base-spinner />
            </div>
            <ul v-else-if="!isLoading && hasCoaches">
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
            const coaches = this.$store.getters[ 'coaches/coaches' ]
            console.log( {coaches} )
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
        },
        isCoach() {
            return this.$store.getters[ 'coaches/isCoach' ]
        },

    },
    data() {
        return {
            isLoading: false,
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
        },
        async loadCoaches() {
            this.isLoading = true;
            await this.$store.dispatch( 'coaches/loadCoaches' );
            this.isLoading = false;
        }
    },
    created() {
        this.loadCoaches();
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