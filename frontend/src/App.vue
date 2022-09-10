<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Orders from './mock/cards.json';

export default {
  name: 'App-component',
  mounted() {
    this.$store.dispatch('orders/loadOrdersAction', Orders);
  },
};
</script>

<style lang="scss">
#app {
  height: 100vh;
  background-color:  #F8F8F8;
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
}
</style>
