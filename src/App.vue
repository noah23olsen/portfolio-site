<template>
  <div class="container">
    <NavBar></NavBar>
    <router-view/>
    <!-- <NoahsProjects/> -->
    <FooterVue></FooterVue>
  </div>
</template>

<script>
// import AboutMe from './components/AboutMe.vue'
import NavBar from './components/NavBar.vue'
import FooterVue from './components/Footer.vue';
// import NoahsProjects from './components/NoahsProjects.vue';

export default {
  name: 'App',
  components: {
    // AboutMe,
    NavBar,
    FooterVue,
    // NoahsProjects,
  }
}
</script>
<style scoped>
  body{
    overflow-x:hidden;
  }
  .container {
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}
</style>