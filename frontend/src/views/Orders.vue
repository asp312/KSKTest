<template>
  <div>
    <Header></Header>
    <div class="wrapper">
      <Filters></Filters>
      <div class="helper">
        <Sort class="help-sort"></Sort>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Filters from '@/components/Filters.vue';
import Sort from '@/components/Sort.vue';

export default {
  name: 'Orders-page',
  components: {
    Filters,
    Header,
    Sort,
  },
};
</script>

<style lang="sass" scoped>
.wrapper
  width: 87%
  margin: 32px auto
  display: flex
.helper
  width: 100%
  margin-left: 16px
.help-sort
  margin-bottom: 16px
</style>
