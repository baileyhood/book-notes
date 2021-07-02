import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { Auth } from 'aws-amplify';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () =>
        import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Register.vue'),
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		meta: {
			requiresAuth: true
		},
		component: () =>
      import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
	}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//NOTE: Have to be logged into reach /dashboard page
router.beforeEach(async (to, from, next) => {
	const currentUser = await Auth.currentAuthenticatedUser()
		.then(user => user)
		.catch(() => false);
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth === true);
	if (requiresAuth && !currentUser) { // If not logged in
		next('login');
	} else {
		next();
	}
});

export default router
