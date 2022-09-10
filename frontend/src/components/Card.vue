<template>
  <div class="card-wrapper">
    <div class="card-wrapper__title">
      <span>{{ container.id }}</span>
       <!-- eslint-disable-next-line -->
      <span @click="open">
        <img src="../assets/verticalDots.svg" alt="dots" width="15px" height="17px" class="pic">
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
    <div class="card-wrapper__content">
      <div>
        <span>Номер накладной:</span>
        <span>{{ container.number }}</span>
      </div>
      <div>
        <span>Тип заказа:</span>
        <span>{{ container.type }}</span>
      </div>
      <div>
        <span>Дата создания:</span>
        <span>{{ container.creationDate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card-component',
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
.card-wrapper
  width: 290px
  height: 160px
  background-color: #F6FAFB
  box-shadow: 0px 4px 12px #EBEBEB
  border-radius: 3px
  color: #647A8C
  box-sizing: border-box
.card-wrapper__title
  position: relative
  display: flex
  justify-content: space-between
  align-items: center
  height: 40px
  background-color: rgba(237, 232, 245, 0.5)
  box-sizing: border-box
  padding: 12px 16px
.options-panel
  position: absolute
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
.card-wrapper__content
  div
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 8px
    padding: 8px 16px
    span
      display: block
.pic
  cursor: pointer
</style>
