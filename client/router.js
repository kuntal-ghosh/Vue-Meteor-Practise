import Vue from 'vue';

import VueRouter from 'vue-router';

// import ProductionDashboard from './components/ProductionDashboard.vue' 
// import ProductionGenerator from './components/ProductionGenerator.vue'
import User from '../imports/ui/User.vue';
import HomePage from '../imports/ui/pages/HomePage.vue';

Vue.use(VueRouter) ;
const routes = [

{ path: '/', name: 'dashboard', component: HomePage

},

{ path: '/user', name: 'generate', component: User },

]

const router = new VueRouter({ mode: 'history',

routes,

})

export default router;