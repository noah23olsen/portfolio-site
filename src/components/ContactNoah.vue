<template>
  <main>
    <section class="contact-section">
        <a href="https://www.linkedin.com/in/noaholsen-/">
        <div class="site-link">
            <p class="siteText">LinkedIn</p>
        </div>
        </a>
        <a href="https://github.com/noah23olsen">
        <div class="site-link">
            <p class="siteText">Github</p>
        </div>
        </a>
        <a href="https://twitter.com/sirNoahOlsen">
        <div class="site-link">
            <p class="siteText">X</p>
        </div>
        </a>
    </section>
  </main>
</template>

<script>
export default {

}
</script>

<style>
.site-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90rem; /* Adjust the width to your desired value */
  height: 5rem; /* Adjust the height to your desired value */
  background-color: #a09c9c;
  color: white;
  margin: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.site-link:hover {
  cursor: pointer;
  background-color: #9c8f8f; /* Change the color to your desired shade */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.contact-section{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    min-height: 80vh;
    
}
a{
    text-decoration: none;
}
a:hover{
    text-decoration: underline;
}
p.siteText{
    font-size:3rem;
}

</style>