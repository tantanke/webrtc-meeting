import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
  /*   {
      path: '/tab',
      component: '@/layouts/index',
      routes: [
        { path: '/tab', redirect: '/tab/home' },
        { exact: true, path: '/tab/home', component: '@/pages/home' },
      ],
    }, */
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', redirect: '/home' },
        { exact: true, path: '/home', component: '@/pages/home' },
      ],
    },
  ],
  fastRefresh: {},
});
