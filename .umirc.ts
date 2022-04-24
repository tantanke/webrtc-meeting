import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/room',
      component: '@/pages/room',
    },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', redirect: '/home' },
        { exact: true, path: '/home', component: '@/pages/home' },
        { exact: true, path: '/join', component: '@/pages/join' },
        { exact: true, path: '/create', component: '@/pages/create' },
        { exact: true, path: '/end', component: '@/pages/end' },
        {
          path: '/manage/',
          component: '@/pages/manage',
          routes: [
            {
              exact: true,
              path: '/manage/make',
              component: '@/pages/manage/meeting-make',
            },
            {
              exact: true,
              path: '/manage/date',
              component: '@/pages/manage/meeting-date',
            },
            {
              exact: true,
              path: '/manage/list',
              component: '@/pages/manage/meeting-list',
            },
            {
              exact: true,
              path: '/manage/info',
              component: '@/pages/manage/info',
            },
          ],
        },
      ],
    },
  ],
  fastRefresh: {},
});
