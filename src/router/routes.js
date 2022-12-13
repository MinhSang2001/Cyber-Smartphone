import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Categories from '../views/Categories.vue'
import ErrorPage from '../views/ErrorPage.vue'
import EachSmartphone from '../components/smartphone/EachSmartphone.vue'
import SmartphoneInfo from '../components/smartphone/SmartphoneInfo.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
let router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',    
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/categories',
            name: 'Categories',
            component: Categories
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/error',
            name: 'ErrorPage',
            component: ErrorPage
        },
        {
            path: '/view/smartphone/:smartphoneType',
            name: 'EachSmartphone',
            component: EachSmartphone
        },
        {
            path: '/view/smartphone/:smartphoneName/:smartphoneFileId',
            name: 'Info',
            component: SmartphoneInfo
        },               
    ]
})
router.beforeEach((to, from, next) => {
    let documentTitle = `${to.name}`
    if(to.params.pageTitle) {
        documentTitle += ` | ${to.params.pageTitle}`
    }
    document.title = documentTitle
    next()
})
export default router