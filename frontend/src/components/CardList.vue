<template>
  <div class="card-list-wrapper">
    <Card v-for="(card, index) of orders" :key="index" :container="card"></Card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from './Card.vue';

export default {
  name: 'CardList-component',
  components: {
    Card,
  },
  computed: {
    ...mapGetters('orders', { orders: 'getOrders' }),
  },
};
</script>

<style lang="sass" scoped>
.card-list-wrapper
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-gap: 16px
</style>
