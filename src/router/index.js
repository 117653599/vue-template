import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home';
import Example from '@/examples/Example';
import Elist from '@/examples/Elist';

import { metaTitle } from './meta';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: metaTitle.home,
      auth: true
    },
    component: Home
  },
  {
    path: '/example',
    name: 'example',
    meta: {
      title: metaTitle.example,
      auth: true
    },
    component: Example,
    children: [
      {
        path: '/example/elist',
        name: 'elist',
        component: Elist
      }
    ]
  }
];

const base = process.env.NODE_ENV === 'development' ? '/' : '/';

const router = new Router({
  mode: 'history',
  base: base,
  routes: routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

// 页面跳转之后，修改页面的title
router.afterEach(transition => {
  console.log('transition: ', transition);
  const title = transition.meta.title;
  if (title) {
    document.title = title;
  }
});

export default router;
