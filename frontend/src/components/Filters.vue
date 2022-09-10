<template>
  <div class="filter-wrapper">
    <h4 class="filter-wrapper__title">Фильтр</h4>
    <div class="input-block">
      <span>Номер накладной:</span>
      <!-- eslint-disable-next-line -->
      <input type="text" placeholder="Введите фрагмент" class="cselect" @change="filterByNumber" v-model="numberFilter">
    </div>
    <div class="filter-select_wrapper">
      <span>Тип заказа:</span>
       <div class="helper">
       <!-- eslint-disable-next-line -->
        <input type="text" readonly class="cselect" @click="open" v-model="filterStatus">
        <span class="pic-wrapp">
          <img src="../assets/arrow.svg" alt="arrow" class="pic" :class="{'rotate': rotateFlag}">
        </span>
       </div>
       <div class="options" v-if="openParam">
        <!-- eslint-disable-next-line -->
          <span @click="letFilter('Все')">Все</span>
          <!-- eslint-disable-next-line -->
          <span @click="letFilter('Самовывоз')">Самовывоз</span>
          <!-- eslint-disable-next-line -->
          <span @click="letFilter('Курьерская доставка')">Курьерская доставка</span>
          <!-- eslint-disable-next-line -->
          <span @click="letFilter('Доставка в пункт выдачи')">Доставка в пункт выдачи</span>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Filters-component',
  data() {
    return {
      openParam: false,
      rotateFlag: false,
      filterStatus: 'Выберите из списка',
      numberFilter: '',
    };
  },
  methods: {
    open() {
      this.openParam = !this.openParam;
      this.rotateFlag = !this.rotateFlag;
    },
    letFilter(text) {
      this.rotateFlag = false;
      this.openParam = false;
      this.$store.dispatch('orders/filterActions', text);
      this.filterStatus = text;
    },
    filterByNumber() {
      this.$store.dispatch('orders/filterByNumberAction', this.numberFilter);
    },
  },
};
</script>

<style lang="sass" scoped>
.filter-wrapper
  width: 280px
  height: 184px
  filter: drop-shadow(0px 4px 8px rgba(179, 178, 178, 0.25))
  background-color: white
  .filter-wrapper__title
    margin: 0
    padding: 8px
.input-block
  padding: 8px 16px 16px 16px
  span
    margin-bottom: 4px
    font-weight: bold
    display: block
.options
  position: absolute
  z-index: 10000000
  width: 240px
  height: 64px
  box-shadow: 0px 4px 12px #E7E7E7
  span
    background-color: #FFFFFF
    display: block
    box-sizing: border-box
    padding: 8px 12px
    height: 32px
    cursor: pointer
.cselect
  cursor: pointer
  box-sizing: border-box
  height: 32px
  width: 220px
  padding: 8px 12px
.filter-select_wrapper
  position: relative
  padding-left: 12px
.pic-wrapp
  position: absolute
  right: 33px
  top: 5px
.pic
  transition: 0.5s
.rotate
  transform: rotate(180deg)
  transition: 0.5s
.helper
  width: 240px
  position: relative
</style>
