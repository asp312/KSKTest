<template>
  <div class="sort-wrapper">
    <div class="sort-panel">
       <div class="helper">
       <!-- eslint-disable-next-line -->
        <input type="text" readonly class="cselect" @click="open" v-model="filterStatus">
        <span class="pic-wrapp">
          <img src="../assets/arrow.svg" alt="arrow" class="pic" :class="{'rotate': rotateFlag}">
        </span>
       </div>
       <div class="options" v-if="openParam">
        <!-- eslint-disable-next-line -->
        <span @click="letSort('inc', 'По возрастанию')">По возрастанию</span>
        <!-- eslint-disable-next-line -->
        <span @click="letSort('dec', 'По убыванию')">По убыванию</span>
       </div>
    </div>
    <div class="sort-switcher">
      <!-- eslint-disable-next-line -->
      <span
        class="table-btn-wrapper"
        @click="changeVisibleFormat('Table')"
        :class="{'active': activeTable}">
        <img src="../assets/tableBtn.svg" alt="table format" width="15px" height="15px">
      </span>
      <!-- eslint-disable-next-line -->
      <span
        class="cards-btn-wrapper"
        @click="changeVisibleFormat('CardList')"
        :class="{'active': activeCards}">
        <img src="../assets/cardsBtn.svg" alt="table format" width="23px" height="23px">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sort-component',
  data() {
    return {
      activeTable: false,
      activeCards: false,
      openParam: false,
      rotateFlag: false,
      filterStatus: 'Сортировать',
    };
  },
  methods: {
    changeVisibleFormat(route) {
      this.$router.push({ name: `${route}` });
      if (route === 'Table') {
        this.activeTable = true;
        this.activeCards = false;
      }
      if (route === 'CardList') {
        this.activeCards = true;
        this.activeTable = false;
      }
    },
    open() {
      this.openParam = !this.openParam;
      this.rotateFlag = !this.rotateFlag;
    },
    letSort(sortParam, text) {
      this.rotateFlag = false;
      this.openParam = false;
      this.filterStatus = text;
      this.$store.dispatch('orders/sortOrdersAction', sortParam);
    },
  },
};
</script>

<style lang="sass" scoped>
.sort-wrapper
  width: 100%
  display: flex
  justify-content: space-between
  align-items: center
.sort-panel
  position: relative
  box-sizing: border-box
  width: 80%
  height: 64px
  background: #FFFFFF
  box-shadow: 0px 4px 12px #E7E7E7
  border-radius: 3px
  padding: 16px
.options
  position: absolute
  z-index: 10000000
  width: 240px
  height: 64px
  background-color: #FFFFFF
  box-shadow: 0px 4px 12px #E7E7E7
  span
    display: block
    box-sizing: border-box
    padding: 8px 12px
    height: 32px
    cursor: pointer
.cselect
  cursor: pointer
  box-sizing: border-box
  height: 32px
  width: 240px
  padding: 8px 12px
.sort-switcher
  display: flex
  span
    width: 40px
    height: 40px
    display: flex
    justify-content: center
    align-items: center
    border: 1px solid #045DA7
    cursor: pointer
.table-btn-wrapper
  border-radius: 6px 0 0 6px
.cards-btn-wrapper
  border-right: none
  border-radius: 0 6px 6px 0
.active
  background-color: #647A8C
.pic-wrapp
  position: absolute
  right: 13px
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
