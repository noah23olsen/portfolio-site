<template>
  <!-- Navbar -->
  <nav class="navbar">
    <div class="container">
      <a href="#" class="logo">Noah's Portfolio Site</a>
      <div class="nav-links">
        <router-link class="nav-link" :to="{name: 'AboutMeName'}">About</router-link>
        <router-link class="nav-link" :to="{name: 'NoahsProjectsName'}">Projects</router-link>
         <router-link class="nav-link" :to="{name: 'ContactNoah'}">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
.navbar {
  background-color: #333; /* Change navbar background color */
  padding: 20px 0;
  width:100%;
  overflow-x:hidden;
}
@media only screen and (max-width:500px){
  .navbar{
    overflow-x:hidden;
  }
}

.logo {
  font-size: 1.5em;
  color: white; /* Set logo color to white */
  text-decoration: none;
}

.nav-link {
  margin-left: 15px;
  color: white; /* Set nav link color to white */
  text-decoration: none;
}
</style>