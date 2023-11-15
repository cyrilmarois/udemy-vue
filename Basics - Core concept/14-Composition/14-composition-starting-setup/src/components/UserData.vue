<template>
    <h2>{{ userName }}</h2>
    <h3>{{ nickName }}</h3>
</template>

<script>
import {computed, inject, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue';

export default {
    props: [ 'lastName', 'firstName', 'age' ],

    setup( props, context ) {
        console.log( {context} )
        const uNickName = inject( 'userNickName' );

        const uName = computed( function () {
            return `${ props.firstName } ${ props.lastName }`;
        } );

        onBeforeMount( function () {
            console.log( 'ON BEFORE MOUNT' );
        } );
        onMounted( function () {
            console.log( 'ON MOUNTED' );
        } );
        onBeforeUpdate( function () {
            console.log( 'ON BEFORE UPDATE' );
        } );
        onUpdated( function () {
            console.log( 'ON UPDATED' );
        } );
        onBeforeUnmount( function () {
            console.log( 'ON BEFORE UNMOUNT' );
        } );
        onUnmounted( function () {
            console.log( 'ON MOUNTED' );
        } );

        return {userName: uName, nickName: uNickName}
    }
}
</script>

