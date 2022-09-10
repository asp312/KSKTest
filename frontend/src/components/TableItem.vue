<template>
  <div class="table-wrapper__content">
    <span>{{container.id}}</span>
      <span>{{container.number}}</span>
      <span>{{container.type}}</span>
      <span>{{container.creationDate}}</span>
      <span class="openHelper">
        <!-- eslint-disable-next-line -->
        <img src="../assets/verticalDots.svg" alt="dots" width="15px" height="17px" class="pic" @click="open">
        <div class="options-panel" v-if="openParam">
          <!-- eslint-disable-next-line -->
          <span  @click="deleteItem">
            <img src="../assets/bin.svg" alt="delete" width="15px" height="15px" class="pic">
          </span>
          <!-- eslint-disable-next-line -->
          <span  @click="deleteItem" class="pic">удалить</span>
        </div>
      </span>
  </div>
</template>

<script>
export default {
  name: 'TableItem-component',
  props: ['container'],
  data() {
    return {
      openParam: false,
    };
  },
  methods: {
    open() {
      this.openParam = true;
    },
    deleteItem() {
      this.$store.dispatch('orders/deleteItemAction', this.container.id);
      this.openParam = false;
    },
  },
};
</script>

<style lang="sass" scoped>
.table-wrapper__content
  display: grid
  grid-template-columns: 1fr 1fr 1fr 1fr 0.25fr
  grid-gap: 5px
  background-color: white
  span
    display: flex
    justify-content: start
    align-items: center
    padding-left: 10px
    height: 40px
.options-panel
  position: absolute
  z-index: 10000
  display: flex
  align-items: center
  right: 20px
  width: 150px
  height: 40px
  padding: 12px 0 12px 15px
  box-sizing: border-box
  background: #FFFFFF
  box-shadow: 0px 4px 4px rgba(182, 182, 182, 0.25)
  border-radius: 2px
  span
    margin-right: 12px
.pic
  cursor: pointer
.openHelper
  position: relative
  justify-self: center
  padding-left: 0 !important
</style>
