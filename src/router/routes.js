
import HomeLayout from '@/pages/home/index.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: HomeLayout,
    redirect: '/mine',
    meta: {
      index: 1
    },
    children: [
      {
        path: '/mine',
        name: 'Mine',
        component: () => import('@/pages/mine'),
        meta: {
          title: '我的资产',
          index: 1
        }
      },
      {
        path: '/task',
        name: 'Task',
        component: () => import('@/pages/task'),
        meta: {
          title: '盘点任务',
          index: 1
        },
      },
      {
        path: '/manage',
        name: 'Manage',
        component: () => import('@/pages/manage'),
        meta: {
          title: '资产管理',
          index: 1
        }
      },

    ]
  },

  {
    path: '/task/task-detail',
    name: 'TaskDetail',
    component: () => import('@/pages/task/taskDetail'),
    meta: {
      title: '盘点任务详情',
      index: 2
    }
  },

  {
    path: '/task/query-list',
    name: 'QueryList',
    component: () => import('@/pages/task/queryList'),
    meta: {
      title: '盘赢资产',
      index: 2
    }
  },

  {
    path: '/task/bar-input',
    name: 'BarInput',
    component: () => import('@/pages/task/barInput'),
    meta: {
      title: '手动输入条形码',
      index: 2
    }
  },

]

export default routes
