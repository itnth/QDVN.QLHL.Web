import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Student from '@/components/Student.vue'
import StatisticalVue from '@/components/Statistical.vue'
import MainView from '@/views/MainView.vue'
import ArmyUnit from '@/components/ArmyUnit.vue'
import Managers from '@/components/Managers.vue'
import DeviceManager from '@/components/DeviceManager.vue'
import TrainingPlan from '@/components/TrainingPlan.vue'
import ImplementTrainingPlans from '@/components/ImplementTrainingPlans'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'statistical',
      children: [
        {
          name: 'student',
          path: 'student',
          meta: { title: 'Quản lý học viên' } ,
          component: Student,
        },
        {
          name: 'statistical',
          meta: { title: 'Thống kê' } ,
          path: 'statistical',
          component: StatisticalVue,
        },
        {
          name: 'armyunit',
          path: 'armyunit',
          meta: { title: 'Quản lý đơn vị' } ,
          component: ArmyUnit,
        },
        {
          name: 'managers',
          meta: { title: 'Quản lý cán bộ' } ,
          path: 'managers',
          component: Managers,
        },
        {
          name: 'devicemanager',
          meta: { title: 'Trang thiết bị huấn luyện' } ,
          path: 'devicemanager',
          component: DeviceManager,
        },
        {
          name: 'trainingplan',
          path: 'trainingplan',
          meta: { title: 'Kế hoạch huấn luyện' } ,
          component: TrainingPlan,
        },
        {
          name: 'implementtrainingplans',
          path: 'implementtrainingplans',
          meta: { title: 'Thực hiện kế hoạch huấn luyện' } ,
          component: ImplementTrainingPlans,
        },
        
        
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

export default router
