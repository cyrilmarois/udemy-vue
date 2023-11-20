<template>
    <section>
        <base-card>
            <header>
                <h2>Requests Received</h2>
            </header>
            <ul v-if="hasRequests">
                <li v-for="request in receivedRequests" :key="request.id">
                    <RequestItem :email="request.userEmail" :message="request.userMessage" />
                </li>
            </ul>
            <h3 v-else>No request yet</h3>
        </base-card>

    </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';

export default {
    components: {RequestItem},
    computed: {
        receivedRequests() {
            console.table( this.$store.getters[ 'requests/requests' ] )
            return this.$store.getters[ 'requests/requests' ];
        },
        hasRequests() {
            return this.$store.getters[ 'requests/hasRequests' ];
        }
    }
}
</script>
<style scoped>
header {
    text-align: center;
}

ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 30rem;
}

h3 {
    text-align: center;
}
</style>