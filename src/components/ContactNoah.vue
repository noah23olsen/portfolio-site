<template>
  <main>
    <section class="contact-section">
        <a href="https://www.linkedin.com/in/noaholsen-/">
        <div class="site-link">
            <p>LinkedIn</p>
        </div>
        </a>
        <a href="https://github.com/noah23olsen">
        <div class="site-link">
            <p>Github</p>
        </div>
        </a>
        <a href="https://twitter.com/sirNoahOlsen">
        <div class="site-link">
            <p>X</p>
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
div.site-link{
    display:flex;
     justify-content: center;
    align-items: center;
    text-align: center;
    padding:2rem;
    border:5px solid black;
    width:100%;;
    margin:1rem;
    border-radius: 1rem;
    background-color:rgba(168, 147, 147, 0.292);
}
div.site-link:hover{
    background-color:white;

}
.contact-section{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
}
a{
    text-decoration: none;
}
a:hover{
    text-decoration: underline;
}

</style>