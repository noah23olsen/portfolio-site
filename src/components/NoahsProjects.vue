<template>
   <main class="main-content">
        <div class="container">
             <h1 class="projectsh1">My Projects</h1>
            <section class="projectsSection">
                <div class="project">
                    <p class="projectTitle">Chatbot</p>
                    <img :src="imageSrc">
                </div>
                <div class="project">
                    <p class="projectTitle">Tenmo</p>
                    <img :src="imageSrc">
                </div>
                <div class="project">
                    <p class="projectTitle">Slackbot</p>
                    <img :src="imageSrc">
                </div>
                <div class="project">
                    <p class="projectTitle">Morse Code</p>
                    <img :src="imageSrc">
                </div>
            </section>
        </div>
  </main>
</template>

<script>
export default {
 data() {
    return {
      imageSrc: require('@/assets/logo.png')
    }
}
}
</script>

<style>
.projectsSection{
    display:flex;
    justify-content:space-between;
    padding:4rem;
}
.project{
    padding:1rem;
    border: 5px solid gray;
    border-radius:10%;
}
.projectsh1{
    text-align: center;
}
</style>