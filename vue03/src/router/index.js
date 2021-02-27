import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Welcome from '@/components/Welcome'
import Teacher from '@/view/Teacher'
import Student from '@/view/Student'
import Lesson from '@/view/Lesson'
import Admin from '@/view/Admin/Index'
import updatePass from '@/view/Admin/updatePass'
Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/Login', component: Login},
    {path: '/', redirect: '/login'},
    {path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        {path: '/welcome', component: Welcome},
        {path: '/PersonInfo', component: Admin},
        {path: '/upDatePass',
          component: updatePass,
          children:
          [
            {path: '/Adminupdatepass', component: Teacher}
          ]
        },
        {path: '/TeacherInfo',
          component: Teacher,
          children:
        [
          {path: '/addTeacher', component: Teacher},
          {path: '/selectTeacher', component: Teacher},
          {path: '/editTeacherInfo', component: Teacher},
          {path: '/deleteTeacher', component: Teacher}
        ]},
        {path: '/StudentInfo',
          component: Student,
          children:
          [
            {path: '/addStudent', component: Student},
            {path: '/selectStudent', component: Student},
            {path: '/editStudentInfo', component: Student},
            {path: '/deleteStudent', component: Student}
          ]
        },
        {path: '/LessonInfo',
          component: Lesson,
          children:
          [
            {path: '/addLesson', component: Lesson},
            {path: '/selectLesson', component: Lesson},
            {path: '/editLessonInfo', component: Lesson},
            {path: '/deleteLesson', component: Lesson}
          ]
        }
      ]
    }
  ]
})
// // 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   // to 将要访问的路径
//   // from 代表从哪个路径跳转而来
//   // next 是一个函数，表示放行
//   //   next() 放行   next('/login') 强制跳转
//   if (to.path === '/login') return next()
//   // 获取token
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) return next('/login')
//   next()
// })
export default router
