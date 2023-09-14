<template>
  <footer class="footer">
    <p class="footerText">&copy; 2023 Noah Olsen</p>
    <div class="container">
      <a href="https://www.linkedin.com/in/noaholsen-/" target="_blank">
      <i class="uil uil-linkedin"></i>
      </a>
      <a href="https://github.com/noah23olsen" target="_blank">
      <i class="uil uil-github-alt"></i>
      </a>
      <a href="https://twitter.com/sirNoahOlsen" target="_blank">
      <i class="uil uil-twitter"></i>
      </a>
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
  height:4rem;
}
div.container {
  flex-direction: row;
  display: flex;
  align-items: center;
}
i{
  padding:1rem;
  color:white;
}
i:hover{
  color:rgb(182, 177, 177);
  cursor:pointer;
}

@media only screen and (max-width: 500px) {
  i{
    background-color:red;
    color:white;
    z-index: 1;
    padding:0.5rem;
  }
}
</style>