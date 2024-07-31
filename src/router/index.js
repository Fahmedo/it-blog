import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { useUserStore } from '../stores/user';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/postsDetails/:id',
      name: 'posts',
      component: () => import('../views/components/PostDetails.vue'),
      meta: { auth: true },
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { auth: false },
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue'),
      meta: { auth: false },
    },
    {
      path: '/post/createPost',
      name: 'createPost',
      component: () => import('../views/components/CreatePost.vue'),
      meta: { auth: true },
    },
    {
      path: '/profile',
      name: 'profileDetails',
      component: () => import('../views/utilities/ProfileView.vue'),
      meta: { auth: true },
    },
    {
      path: '/notification',
      name: 'notification',
      component: () => import('../views/utilities/NotificationView.vue'),
      meta: { auth: true },
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/utilities/SettingsView.vue'),
      meta: { auth: true },
    },
    {
      path: '/verify_email',
      name: 'VerifyEmail',
      component: () => import('../views/utilities/verifyEmail.vue'),
      meta: { auth: true },
    },
    {
      path: '/reset_password',
      name: 'ResetPassword',
      component: () => import('../views/utilities/ResetPassword.vue'),
      meta: { auth: true },
    },
  ],
});
router.beforeEach((to, from, next) => {
  const { authUser } = useUserStore();
  if (to.meta.auth && !authUser) {
    next('/login');
  } else {
    next();
  }
});

export default router;
