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
            <p class="overlay-text">
              A middleground chatbot between simplistic customer-service
              chatbot, and custom LLMs such as chatGPT. The user can speak,
              listen, ask technical questions, receive custom emailed jobs,
              interpret code, take profile pictures, and keep context. This was
              my final capstone project, where I worked with 3 other students.
              We had multi-day sprints, daily standups, code reviews, and a
              final presentation.
            </p>
          </div>
          <div v-else>
            <p class="projectTitle">Chatbot</p>
            <img src="../assets/chatbotPic.png" />
          </div>
        </div>
        <div
          class="project"
          @click="
            redirectToLink('https://youtu.be/z2Mgc4NLjW4?si=7EE4ZmBwIKO6rcoa')
          "
          @mouseover="showOverlay8 = true"
          @mouseleave="showOverlay8 = false"
        >
          <div class="overlay" v-if="showOverlay8">
            <p class="overlay-text">
              Part of MakeOHI/O, this project reads photos and moves the
              contraption to the most efficient light-position. The project
              utilizes Arduino IDE, 3d-printed cad models, and electrical
              hardware components. I was one of the two "business" major
              students at the hackathon, coupled with my partners expertise in
              electrical engineering. This project has really instilled a
              passion inside me for designing cool hardware/software projects.
            </p>
          </div>
          <div v-else>
            <p class="projectTitle">Reflected Light To Solar Panel Capturer</p>
            <img src="../assets/solarCapturer.png" />
          </div>
        </div>
        <div
          class="project"
          @mouseover="showOverlay7 = true"
          @mouseleave="showOverlay7 = false"
          @click="
            redirectToLink('https://github.com/noah23olsen/hackathonAtCohatch')
          "
        >
          <div class="overlay" v-if="showOverlay7">
            <p class="overlay-text">
              Generate custom quizzes with ChatGPT's turbo 3.5 large language
              model in seconds! This project was created by me and a fellow Tech
              Elevator alumnus during a Google Developer Group hackathon this
              past weekend. In approximately 10 hours, we progressed from
              ideation to building the MVP, crafting a pitch, and presenting the
              product to local Columbus developers.
            </p>
          </div>
          <div v-else>
            <p class="projectTitle">Quiz.AI</p>
            <img src="../assets/Quiz.AI.png" />
          </div>
        </div>
        <!-- leave these bottom divs for now -->
        <div
          class="project"
          @mouseover="showOverlay3 = true"
          @mouseleave="showOverlay3 = false"
        >
          <div class="overlay" v-if="showOverlay3">
            <p class="overlay-text">
              This project enables users to transmit Morse code onto a computer
              using their fingertips. I employed Arduino IDE for software
              development and Arduino Uno/electrical components for the
              hardware. When the user inputs Morse code using the button, the
              corresponding text is displayed on an external monitor.
            </p>
          </div>
          <div v-else>
            <p class="projectTitle">Telegraph</p>
            <img src="../assets/telegraph.jpg" />
          </div>
        </div>
        <!-- @click="redirectToLink('https://github.com/noah23olsen/Chorebot')" -->
        <div
          class="project"
          @mouseover="showOverlay4 = true"
          @mouseleave="showOverlay4 = false"
        >
          <div class="overlay" v-if="showOverlay4">
            <p class="overlay-text">
              Recognizing the perpetual untidiness in my shared living space, I
              leveraged my newfound development skills to create a Slack bot
              using Java and Python. The bot assigns designated chores to
              household members every Sunday morning, effectively addressing the
              cleanliness issue.
            </p>
          </div>
          <div v-else>
            <p class="projectTitle">Chorebot</p>
            <img src="../assets/chorebot.png" />
          </div>
        </div>
        <div
          class="project"
          @click="redirectToLink('https://github.com/noah23olsen/m1-capstone')"
          @mouseover="showOverlay5 = true"
          @mouseleave="showOverlay5 = false"
        >
          <div class="overlay" v-if="showOverlay5">
            <p class="overlay-text">placeholder text</p>
          </div>
          <div v-else>
            <p class="projectTitle">Cash Register Application</p>
            <img src="../assets/cashRegister.png" />
          </div>
        </div>
        <div
          class="project"
          @mouseover="showOverlay6 = true"
          @mouseleave="showOverlay6 = false"
        >
          <div class="overlay" v-if="showOverlay6">
            <p class="overlay-text">placeholder text</p>
          </div>
          <div v-else>
            <p class="projectTitle">
              Enhancing Autonomous Wine Quality Prediction
            </p>
            <img src="../assets/IMG_0418.jpg" />
          </div>
        </div>
        <div
          class="project"
          @click="
            redirectToLink('https://github.com/noah23olsen/module-2-capstone')
          "
          @mouseover="showOverlay2 = true"
          @mouseleave="showOverlay2 = false"
        >
          <div class="overlay" v-if="showOverlay2">
            <p class="overlay-text">placeholder text</p>
          </div>
          <div v-else>
            <p class="projectTitle">Tenmo</p>
            <img src="../assets/tenmo.png" />
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
      showOverlay7: false,
      showOverlay8: false,
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
.projectTitle {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: black;
  text-decoration: underline;
}
img {
  width: 100%;
  height: 80%;
  border-radius: 10%;
}
.projectsSection {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
  justify-content: space-between;
  padding: 0 5rem 5rem 5rem;
}
.project {
  background-color: rgb(222, 222, 222);
  border: 5px solid gray;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
  padding: 0px 2rem 2rem 2rem;
}
.projectsh1 {
  text-align: center;
}
.project:hover {
  cursor: pointer;
}
.overlay {
  background-color: rgb(158, 152, 152, 0.144);
  height: 100%;
  width: 100%;
  border-radius: 10%;
}
p.overlay-text {
  text-align: center;
  font-size: 1.5rem;
  text-align: left;
}
h1 {
  font-size: 2rem;
}
@media only screen and (max-width: 500px) {
  .projectsSection {
    grid-template-columns: 1fr;
  }
  img {
    height: 60%;
    width: 80%;
    padding: 0.5rem 1.4rem 0.5rem 1.4rem;
    border-radius: 20%;
  }
  .project {
    height: fit-content;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 0rem;
  }
  .projectTitle {
    font-size: 1.5rem;
    padding: 0;
  }
  p {
    margin: 0;
  }
}
</style>