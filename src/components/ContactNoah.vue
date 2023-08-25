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
    text-align: center;
    padding:2rem;
    border:5px solid black;
    margin:1rem;
    border-radius: 1rem;
    background-color:rgba(168, 147, 147, 0.292);
    width: 50%;
}
div.site-link:hover{
    background-color:white;

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