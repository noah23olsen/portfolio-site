<template>
  <footer class="footer">
    <p class="footerText">&copy; 2023 Noah Olsen</p>
    <div class="container">
      <i class="uil uil-linkedin"></i>
      <i class="uil uil-github-alt"></i>
      <i class="uil uil-twitter"></i>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterVue",
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: sticky;
  bottom: 0;
  width: 100%;
}
div.container {
  flex-direction: row;
  display: flex;
  align-items: center;
}
i{
  padding:1rem
}
i:hover{
  color:rgb(182, 177, 177);
  cursor:pointer;
}

@media only screen and (max-width: 500px) {
}
</style>