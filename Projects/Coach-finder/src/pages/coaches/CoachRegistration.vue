<template>
    <section>
        <base-card>
            <h2>Register as a Coach</h2>
            <CoachForm @register-coach="registerCoach" />
        </base-card>
    </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
    components: {CoachForm},
    methods: {
        registerCoach( data ) {
            this.$store.dispatch( 'coaches/registerCoach', data );
        }
    }
}
</script>