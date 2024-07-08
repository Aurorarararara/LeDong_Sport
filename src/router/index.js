import {createRouter, createWebHistory} from 'vue-router'
import Login from "@/views/Login.vue";
import registered from "@/views/registered.vue";
import index from "@/Layout/index.vue";
import GradeCalculate from "@/views/checkIn/GradeCalculate.vue";
import SportCheckIn from "@/views/checkIn/SportCheckIn.vue";
import TeachingMaterials from "@/views/notice/TeachingMaterials.vue";
import notice from "@/views/notice/notice.vue";
import lesson from "@/views/notice/lesson.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/registered',
            name: 'registered',
            component: registered
        },
        {
            path: '/index',
            name: 'index',
            component: index,
            children: [
                {
                  path:'/lesson',
                  name:'lesson',
                  component:lesson
                },
                {
                    path: '/notice',
                    name: 'notice',
                    component: notice
                },
                {
                    path: '/gradeCalculate',
                    name: 'gradeCalculate',
                    component: GradeCalculate
                },
                {
                    path: '/sportCheckIn',
                    name: 'sportCheckIn',
                    component: SportCheckIn
                },
                {
                    path: '/teachingMaterials',
                    name: 'teachingMaterials',
                    component: TeachingMaterials
                }
            ]
        },
    ]
})

export default router
