import Vue from 'vue';
import VueRouter from 'vue-router';
import Orders from '../views/Orders.vue';
import CardList from '../components/CardList.vue';
import Table from '../components/Table.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/orders/table',
  },
  {
    path: '/orders',
    name: 'oreders',
    component: Orders,
    children: [
      {
        path: 'cards',
        name: 'CardList',
        component: CardList,
      },
      {
        path: 'table',
        name: 'Table',
        component: Table,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
