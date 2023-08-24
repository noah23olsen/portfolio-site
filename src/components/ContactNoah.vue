<template>
  <main>
    <section class="contact-section">
        <div class="site-link">
            <a href="https://www.linkedin.com/in/noaholsen-/">LinkedIn</a>
        </div>
        <div class="site-link">
            <a href="https://github.com/noah23olsen">Github</a>
        </div>
        <div class="site-link">
            <a href="https://twitter.com/sirNoahOlsen">X</a>
        </div>
    </section>
  </main>
</template>

<script>
export default {

}
</script>

<style>
div.site-link{
    padding:2rem;
    border:5px solid black;
    margin:1rem;
    border-radius: 1rem;
    background-color:rgba(67, 63, 63, 0.292);
}
.contact-section{
    padding:10px;
    display:flex;
    flex-direction: column;
}
a{
    text-decoration: none;
}
a:hover{
    text-decoration: underline;
}

</style>