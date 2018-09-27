import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import Muro from '../components/Muro.vue'
//import SignOut from '../components/SignOut.vue'
import firebase from 'firebase'

Vue.use(Router)

//Vue.use(BootstrapVue)
const routes = [
    { path: '*', redirect: '/login'},

    {path: '/', redirect: 'login'},

    { path: '/login', component: Login, name: 'Login'},
    
    { path: '/signup', component: SignUp, name: 'Signup'},

    { path: 'muro', component: Muro, name: 'Muro',
    meta: {
    requiresAuth: true
}
    }
]

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requieresAuth = to.matched.some(record => record.meta.requieresAuth);

    if (requiresAuth && !currentUser) next('login')
    else if (!requieresAuth && currentUser) next('muro')
})
export default routes
