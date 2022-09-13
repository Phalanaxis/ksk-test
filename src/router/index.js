import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'default',
    redirect: {
      name: 'home',
    },
    component: () => import('../layouts/defaultLayout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/tableView.vue'),
      },
      {
        path: '/grid',
        name: 'grid',
        component: () => import('../views/gridView.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
