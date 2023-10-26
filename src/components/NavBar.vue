<template>
  <!-- <router-link class="nav-link" :to="{name: 'AboutMeName'}">Noah's Portfolio Site</router-link> -->
  <nav class="navbar">
      <div class="nav-links">
        <div class="nav-link" @click="$router.push({ name: 'AboutMeName' })">About</div>
        <div class="nav-link" @click="scrollToBottom">Contact</div>
      </div> <!-- Add this closing div tag -->
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    scrollToBottom(){
      //gets size of element in relation to viewport
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: white;
  display: flex;
  justify-content: center;
  height: 10vh;
  align-items: center;
}
.nav-links{
  display: flex;
}
.nav-link {
  background-color:rgba(154, 140, 140, 0.1);
  color: black; /*text color */
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem; /* Add border-radius for a modern look */
  transition: background-color 0.3s ease; /* Add transition for smooth color change */
  font-size:1.5rem;
}
.nav-link:hover {
  cursor: pointer;
  background-color: #141212; /* Change the color to your desired shade */
  color:white;
}



@media only screen and (max-width:500px){
}
</style>