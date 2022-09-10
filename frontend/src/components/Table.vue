<template>
  <div class="table-wrapper">
    <div class="table-wrapper__head">
      <span>ID</span>
      <span>Номер накладной</span>
      <span>Тип заказа</span>
      <span>Дата создания</span>
      <span></span>
    </div>
    <div class="table-wrapper__content" v-for="(card, index) of orders" :key="index">
      <TableItem :container="card"></TableItem>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TableItem from './TableItem.vue';

export default {
  name: 'Table-component',
  components: {
    TableItem,
  },
  computed: {
    ...mapGetters('orders', { orders: 'getOrders' }),
  },
};
</script>

<style lang="sass" scoped>
.table-wrapper
  width: 100%
.table-wrapper__head
  display: grid
  grid-template-columns: 1fr 1fr 1fr 1fr 0.25fr
  grid-gap: 5px
  span
    background-color: #E6E6E6
    display: flex
    justify-content: center
    align-items: center
    height: 40px
</style>
