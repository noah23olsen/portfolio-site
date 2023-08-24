<template>
  <main class="main-content">
    <div class="container">
      <h1 class="projectsh1">My Projects</h1>
      <section class="projectsSection">
        <div
          class="project"
          @click="redirectToLink('https://github.com/noah23olsen/m3-capstone')"
          @mouseover="showOverlay1 = true"
          @mouseleave="showOverlay1 = false"
        >
          <div class="overlay" v-if="showOverlay1">
            <p class="overlay-text">placeholder text</p>
          </div>
          <div v-else>
            <p class="projectTitle">Chatbot</p>
            <img :src="imageSrc" />
          </div>
        </div>
        <div
          class="project"
          @click="redirectToLink('https://github.com/noah23olsen/m3-capstone')"
          @mouseover="showOverlay2 = true"
          @mouseleave="showOverlay2 = false"
        >
          <div class="overlay" v-if="showOverlay2">
            <p class="overlay-text">placeholder text</p>
          </div>
          <div v-else>
            <p class="projectTitle">Tenmo</p>
            <img :src="imageSrc" />
          </div>
        </div>
        <!-- leave these bottom divs for now -->
        <div
          class="project"
          @click="redirectToLink('https://github.com/noah23olsen/m3-capstone')"
          @mouseover="showOverlay3 = true"
          @mouseleave="showOverlay3 = false"
        >
          <div class="overlay" v-if="showOverlay3">
            <p class="overlay-text">placeholder text</p>
          </div>
          <div v-else>
            <p class="projectTitle">Telegraph</p>
            <img :src="imageSrc" />
          </div>
        </div>
        <div
          class="project"
          @click="redirectToLink('https://github.com/noah23olsen/m3-capstone')"
          @mouseover="showOverlay4 = true"
          @mouseleave="showOverlay4 = false"
        >
          <div class="overlay" v-if="showOverlay4">
            <p class="overlay-text">placeholder text</p>
          </div>
          <div v-else>
            <p class="projectTitle">Chorebot</p>
            <img :src="imageSrc" />
          </div>
        </div>
        <div
          class="project"
          @click="redirectToLink('https://github.com/noah23olsen/m3-capstone')"
          @mouseover="showOverlay5 = true"
          @mouseleave="showOverlay5 = false"
        >
          <div class="overlay" v-if="showOverlay5">
            <p class="overlay-text">placeholder text</p>
          </div>
          <div v-else>
            <p class="projectTitle">Cash Register Application</p>
            <img :src="imageSrc" />
          </div>
        </div>
        <div
          class="project"
          @click="redirectToLink('https://github.com/noah23olsen/m3-capstone')"
          @mouseover="showOverlay6 = true"
          @mouseleave="showOverlay6 = false"
        >
          <div class="overlay" v-if="showOverlay6">
            <p class="overlay-text">placeholder text</p>
          </div>
          <div v-else>
            <p class="projectTitle">Enhancing Autonomous Wine Quality Prediction</p>
            <img :src="imageSrc" />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      imageSrc: require("@/assets/logo.png"),
      showOverlay1: false,
      showOverlay2: false,
      showOverlay3: false,
      showOverlay4: false,
      showOverlay5: false,
      showOverlay6: false,
    };
  },
  methods: {
    redirectToLink(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style>
.projectsSection {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
  justify-content: space-between;
  padding: 0 5rem 5rem 5rem;
}
.project {
  border: 5px solid gray;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.projectsh1 {
  text-align: center;
}
.project:hover {
  cursor: pointer;
}
.overlay {
  background-color: rgb(0, 0, 1,0.5);
  height: 100%;
  width: 100%;
  border-radius:10%;
}
p.overlay-text{
    color:white;
    text-align: center;
}
</style>