import {createRouter, createWebHistory} from 'vue-router';
import AboutMe from '@/components/AboutMe.vue';
import NavBar from '@/components/NavBar.vue';
import NoahsProjects from '@/components/NoahsProjects.vue'

//router object
const router = createRouter({
    history: createWebHistory(),
    routes: [
    { path:'/', name:"AboutMeName", component: AboutMe},
    {path: '/nav',name: "NavBarName", component: NavBar},
    {path:'/projects', name: "NoahsProjectsName", component: NoahsProjects},
  ]
  })
  
//to use in our main.js, export 
export default router;