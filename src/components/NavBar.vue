<template>
  <!-- <router-link class="nav-link" :to="{name: 'AboutMeName'}">Noah's Portfolio Site</router-link> -->
  <nav class="navbar">
    <div class="container">
      <div class="nav-links">
        <div class="nav-link" @click="$router.push({ name: 'AboutMeName' })">About</div>
        <div class="nav-link" @click="$router.push({ name: 'NoahsProjectsName' })">Projects</div>
        <div class="nav-link" @click="$router.push({ name: 'ContactNoah' })">Contact</div>
      </div> <!-- Add this closing div tag -->
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
  background-color: #333;
  display: flex;
  justify-content: center;
  height: 5rem;
  align-items: center;
}
.nav-links{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.nav-link {
  background-color:rgba(0, 0, 0, 0.1);
  flex: 1;
  color: white;
  margin: 0.5rem;
  padding: 1rem;
  padding-left: 15rem;
  padding-right: 15rem;
  border-radius: 0.5rem; /* Add border-radius for a modern look */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add box-shadow for a fancy effect */
  transition: background-color 0.3s ease; /* Add transition for smooth color change */
  text-decoration: underline;
  font-size:1.5rem;
}

.nav-link:hover {
  cursor: pointer;
  background-color: #9e9a9a; /* Change the color to your desired shade */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Increase box-shadow on hover */
}



@media only screen and (max-width:500px){
  .navbar{
    overflow-x:hidden;
  }
}
</style>