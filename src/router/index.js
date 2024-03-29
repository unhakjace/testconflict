// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import HelloWorld from '@/components/HelloWorld.vue'
import Main from '@/components/Main.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld,
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import("../views/Home.vue")
  },
  // 다른 라우트들을 여기에 추가합니다.
  {
    path: '/Home2',
    name: 'Home2',
    component: () => import("@/views/Home2.vue")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 브라우저 자체
// 이동했었던 히스토리(ex 방문 페이지)
// -1로 가기
// -2 로 가기
// 1 다음 가기 

console.log(routes)
export default router;
