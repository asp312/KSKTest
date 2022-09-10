export default {
  namespaced: true,
  state: {
    orders: [],
    startOrders: [],
  },
  getters: {
    // eslint-disable-next-line
    getOrders: state => state.orders,
  },
  mutations: {
    loadOrdersMutation(state, data) {
      /* eslint-disable */
      const res = []
      data.map((item) => {
        switch (item.type) {
          case 'Pickup':
            item.type = 'Самовывоз'
            break;
          case 'Delivery':
            item.type = 'Курьерская доставка'
            break; 
          case 'Pick-point':
            item.type = 'Доставка в пункт выдачи'
            break;
        }
        let days = new Date(item.creationDate).getDate()
        let month = new Date(item.creationDate).getMonth()
        const years = new Date(item.creationDate).getFullYear()
        days < 10 ? days = `0${days}` : days = days
        month < 10 ? month = `0${month}` : month = month
        item.creationDate = `${days}.${month}.${years}`
        res.push(item)
      });
      state.orders = [...res];
      state.startOrders = [...res];
    },
    deleteItemMutation(state, id) {
      // eslint-disable-next-line
      const idx = state.orders.findIndex(item => item.id === id);
      const index = state.startOrders.findIndex(item => item.id === id);
      state.orders.splice(idx, 1);
      state.startOrders.splice(index, 1);
    },
    sortOrdersMutation(state, sortParam) {
      if (sortParam === 'inc') return state.orders.sort((a, b) => {
        return a.number.replace(/[^0-9]/g,"") - b.number.replace(/[^0-9]/g,"")
      })
      if (sortParam === 'dec') return state.orders.sort((a, b) => {
        return b.number.replace(/[^0-9]/g,"") - a.number.replace(/[^0-9]/g,"")
      })
    },
    filterMutation(state, filterParam) {
      if (filterParam === 'Все') return state.orders = state.startOrders
      state.orders = state.startOrders.filter(item => {
        return item.type === filterParam
      })
    },
    filterByNumberMutation(state, filterParam) {
      if (filterParam.length < 1) return  state.orders = state.startOrders
      state.orders = state.startOrders.filter(item => {
        return item.number.includes(filterParam.toLowerCase())
      })
    }
  },
  actions: {
    loadOrdersAction({ commit }, data) {
      commit('loadOrdersMutation', data);
    },
    deleteItemAction({ commit }, id) {
      commit('deleteItemMutation', id);
    },
    sortOrdersAction({ commit }, sortParam) {
      commit('sortOrdersMutation', sortParam);
    },
    filterActions({ commit }, filterParam) {
      commit('filterMutation', filterParam);
    },
    filterByNumberAction({ commit }, filterPAram) {
      commit('filterByNumberMutation', filterPAram)
    }
  },
};
