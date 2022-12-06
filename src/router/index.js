import { createRouter, createWebHistory  } from 'vue-router'



import HomeView from '../views/HomeView.vue'
import Settings from '../views/Settings.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {   
            path: '/',
            name: 'home',
            component: HomeView
        },
        {   
            path: '/settings',
            name: 'settings',
            component: Settings
        },
        {   
            path: '/settings',
            name: 'about',
            component: Settings
        }
    ]
})

export default router