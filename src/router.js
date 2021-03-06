import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/views/HomePage'
import AboutPage from '@/views/AboutPage'
import ErrorPage from '@/views/ErrorPage'
import CoinDetail from '@/views/CoinDetail'

Vue.use(Router)


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home_page',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about_page',
            component: AboutPage
        },
        {
            path: '/coin/:id',
            name: 'coin_detail',
            component: CoinDetail
        },
        {
            path: '*',
            name: 'Error_page',
            component: ErrorPage
        },

    ]
})