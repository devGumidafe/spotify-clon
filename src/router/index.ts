import Home from '@/views/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/Search.vue'),
    },
    {
      path: '/library:artistId',
      name: 'library',
      props: true,
      component: () => import('@/views/Library.vue'),
    },
    {
      path: '/liked',
      name: 'liked',
      component: () => import('@/views/LikedSongs.vue'),
    },
  ],
});

export default router;
