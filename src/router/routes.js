
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('src/pages/Home.vue'),
        props: true
      },
      {
        path: '/items',
        name: 'Items',
        component: () => import('src/pages/Items.vue'),
        props: true
      },
      {
        path: '/champions',
        name: 'Champions',
        component: () => import('pages/Champions.vue'),
        props: true
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
