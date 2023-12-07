import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Student from '@/components/StudentList.vue'
import StatisticalVue from '@/components/Statistical.vue'
import MainView from '@/views/MainView.vue'
import ArmyUnit from '@/components/ArmyUnitList.vue'
import ManagersList from '@/components/ManagersList.vue'
import DeviceManager from '@/components/DeviceManagerList.vue'
import TrainingPlan from '@/components/TrainingPlanList.vue'
import ImplementTrainingPlans from '@/components/ImplementTrainingPlans.vue'
import Class from '@/components/ClassList.vue'
import Subject from '@/components/SubjectList.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'statistical',
      children: [
        {
          name: 'subject',
          path: 'subject',
          meta: { title: 'Quản lý môn học' } ,
          component: Subject,
        },
        {
          name: 'class',
          path: 'class',
          meta: { title: 'Quản lý lớp học' } ,
          component: Class,
        },
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
          component: ManagersList,
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
