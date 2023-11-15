<template>
    <h2>{{ userName }}</h2>
    <h3>{{ nickName }}</h3>
</template>

<script>
import {computed, inject} from 'vue';

export default {
    props: [ 'lastName', 'firstName', 'age' ],

    setup( props, context ) {
        console.log( {context} )
        const uNickName = inject( 'userNickName' );

        const uName = computed( function () {
            return `${ props.firstName } ${ props.lastName }`;
        } );
        return {userName: uName, nickName: uNickName}

    }
}
</script>

