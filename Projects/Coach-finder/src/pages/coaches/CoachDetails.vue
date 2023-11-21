<template>
    <div>
        <section>
            <base-card>
                <h2>{{ fullName }}</h2>
                <h3>{{ rate }}</h3>
            </base-card>
        </section>
        <section>
            <base-card>
                <header>
                    <h2>Interested ? Reach me out !</h2>
                    <base-button link :to="coachContactLink">CONTACT ME</base-button>
                </header>
                <router-view></router-view>
            </base-card>
        </section>
        <section>
            <base-card>
                <base-badge v-for="area in areas" :key="area" :title="area" :type="area" />
                <p>{{ description }}</p>
            </base-card>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCoach: null,
        }
    },
    methods: {
        getCoach() {
            this.selectedCoach = this.$store.getters[ 'coaches/coaches' ]
                .find( ( c ) => c.id === this.$route.params.id );
            console.table( this.selectedCoach )
        }
    },
    computed: {
        fullName() {
            return `${ this.selectedCoach?.firstName } ${ this.selectedCoach?.lastName }`;
        },
        rate() {
            return `$ ${ this.selectedCoach?.hourlyRate }/hour`;
        },
        areas() {
            return this.selectedCoach?.areas ?? [];
        },
        description() {
            return this.selectedCoach?.description;
        },
        coachContactLink() {
            return `${ this.$route.path }/${ this.selectedCoach.id }/contact`
        }
    },
    created() {
        this.getCoach();
    }
}
</script>