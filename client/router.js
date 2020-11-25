import Vue from 'vue';

import VueRouter from 'vue-router';

// import ProductionDashboard from './components/ProductionDashboard.vue' 
// import ProductionGenerator from './components/ProductionGenerator.vue'
import User from '../imports/ui/User.vue';
import HomePage from '../imports/ui/pages/HomePage.vue';
import StudentList from '../imports/ui/pages/StudentList.vue';
import EditStudents from '../imports/ui/pages/EditStudents.vue';
import AddSubjects from '../imports/ui/pages/AddSubjects.vue';
import SubjectList from '../imports/ui/pages/SubjectList.vue';


Vue.use(VueRouter) ;
const routes = [

    { path: '/user', name: 'user', component: User },
    { path: '/user/:id', name: 'user-details', component: EditStudents },

    { path: '/list', name: 'list', component: StudentList },
    { path: '/addsubject', name: 'subject', component: AddSubjects },
    { path: '/subjectList', name: 'subjectList', component: SubjectList },



    { path: '/', name: 'home', component: HomePage

},


]

const router = new VueRouter({ mode: 'history',

routes,

})

export default router;