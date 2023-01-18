import { createRouter, createWebHistory  } from 'vue-router'



import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {   
            path: '/',
            name: 'home',
            component: HomeView
        },
        {   
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})

export default router