import Vue from 'vue'
import Router from 'vue-router'

// 获取原型对象上的push函数
const originalPush = Router.prototype.push
// 修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

// 公共路由
export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: (resolve) => require(['@/pages/index'], resolve),
        name: 'index',
        meta: { title: '精选' }
      },
      {
        path: 'star',
        component: (resolve) => require(['@/pages/theme/star'], resolve),
        name: 'star',
        meta: { title: '明星' }
      },
      {
        path: 'hanfu',
        component: (resolve) => require(['@/pages/theme/hanfu'], resolve),
        name: 'hanfu',
        meta: { title: '汉服' }
      },
      {
        path: 'qipao',
        component: (resolve) => require(['@/pages/theme/qipao'], resolve),
        name: 'qipao',
        meta: { title: '旗袍' }
      },
      {
        path: 'jk',
        component: (resolve) => require(['@/pages/theme/jk'], resolve),
        name: 'jk',
        meta: { title: 'jk' }
      },
      {
        path: 'lolita',
        component: (resolve) => require(['@/pages/theme/lolita'], resolve),
        name: 'lolita',
        meta: { title: '洛丽塔' }
      },
      {
        path: 'shouzhuang',
        component: (resolve) => require(['@/pages/theme/shouzhuang'], resolve),
        name: 'shouzhuang',
        meta: { title: '明星' }
      },
      {
        path: 'detail',
        component: (resolve) => require(['@/pages/detail'], resolve),
        name: 'detail',
        meta: { title: '详情' }
      }
    ]
  }
]

export default new Router({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
