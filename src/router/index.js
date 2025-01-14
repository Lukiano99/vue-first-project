import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import JobsView from '@/views/JobsView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import JobView from '@/views/JobView.vue';
import { paths } from './paths';
import AddJobView from '@/views/AddJobView.vue';
import EditJobView from '@/views/EditJobView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: paths.home,
      name: 'home',
      component: HomeView,
    },
    {
      path: paths.jobs,
      name: 'jobs',
      component: JobsView,
    },
    {
      path: `${paths.jobs}/:id`,
      name: 'job',
      component: JobView,
    },
    {
      path: `${paths.jobs}/edit/:id`,
      name: 'edit-job',
      component: EditJobView,
    },
    {
      path: `${paths.jobs}/add`,
      name: 'add-job',
      component: AddJobView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
});

export default router;
