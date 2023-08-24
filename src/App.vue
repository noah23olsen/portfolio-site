<template>
  <NavBar></NavBar>
  <router-view/>
  <FooterVue></FooterVue>
</template>

<script>
// import AboutMe from './components/AboutMe.vue'
import NavBar from './components/NavBar.vue'
import FooterVue from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    // AboutMe,
    NavBar,
    FooterVue
  }
}
</script>