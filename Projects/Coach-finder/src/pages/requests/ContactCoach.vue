<template>
    <div>YOU CONTACT COACH {{ coachId }}</div>
</template>

<script>
export default {
    computed: {
        coachId() {
            return this.$route.params.id
        }
    }
}
</script>