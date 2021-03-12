import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import ArticlesByCategory from '@/components/articles/ArticlesByCategory'
import ArticlesById from '@/components/articles/ArticlesById'
import Auth from '@/components/auth/Auth'


Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'adminPages',
    path: '/admin',
    component: AdminPages
}, {
    name: 'articlesByCategory',
    path: '/categories/:id/articles',
    component: ArticlesByCategory
}, {
    name: 'articlesById',
    path: '/articles:id',
    component: ArticlesById
}, {
    nome: 'auth',
    path: '/auth',
    component: Auth
}]

export default new VueRouter({
    mode: 'history',
    routes: routes
})

