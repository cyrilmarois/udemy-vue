<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
    <p><router-link to="/products/2">Product 2</router-link></p>
  </section>
</template>

<script setup>
import {inject} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();
const products = inject( 'products' );
// get route pid params thought props
// const props = defineProps( [ 'pid' ] );
// const selectedProduct = products.value.find( prod => prod.id === props.pid );
const selectedProduct = products.value.find( prod => prod.id === route.params.pid );

const {title, price, description} = selectedProduct;

</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>