<!-- src/components/Footer.vue -->
<template>
  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <p class="footerText">&copy; 2023 Noah Olsen</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterVue',
}
</script>

<style scoped>
.footer {
  background-color: #333;
  text-align: center;
  height: 5rem;
  bottom: 0;
  left:0;
  color: white;
  text-decoration: none;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center
}

</style>