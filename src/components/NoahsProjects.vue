<template>
  <main class="main-content">
    <h1 class="projectsh1">My Projects</h1>
    <section class="projectsSection">
      <TheProject 
        v-for="project in projects"
       :key="project.title" 
       :description="project.description"
       :link="project.link"
       :title="project.title"
       :img="project.imgSrc"
       :languages="project.languages"
       />
    </section>
  </main>
</template>

<script>
import TheProject from './TheProject.vue';
export default {
  components: {
    TheProject
  },
  data() {
    return {
      projects: [
  {
    languages: ["OpenAI","Java","Javascript","Vue.js","PostgreSQL","Springboot","Spring Boot","RapidAPI"],
    title: "Chatbot",
    link: "https://github.com/noah23olsen/m3-capstone",
    imgSrc: require("@/assets/chatbotPic.png"),
    description: "[Final capstone] My final capstone project was a chatbot that served as a middle ground between simplistic customer-service chatbots and custom LLMs like chatGPT. The chatbot allowed users to speak, listen, ask technical questions, receive custom emailed jobs, interpret code, take profile pictures, and keep context. I worked on this project with three other students, and we followed an Agile methodology with multi-day sprints, daily standups, code reviews, and a final presentation.",
  },
  {
    languages: ["Vue.js", "OpenAI", "Javascript"],
    title: "Quiz.AI",
    link: "https://github.com/noah23olsen/hackathonAtCohatch",
    imgSrc: require("@/assets/Quiz.AI.png"),
    description: "[Hackathon Project] Generate custom quizzes with ChatGPT's turbo 3.5 large language model in seconds! This project was created by me and a fellow Tech Elevator alumnus during a Google Developer Group hackathon this past weekend. In approximately 10 hours, we progressed from ideation to building the MVP, crafting a pitch, and presenting the product to local Columbus developers.",
  },
  {
    languages: ["Java","Spring Boot", "PostgreSQL","JUnit",],
    title: "Tenmo",
    link: "https://github.com/noah23olsen/module-2-capstone",
    imgSrc: require("@/assets/tenmo.png"),
    description: "[Second capstone] Utilized Java, PostgreSQL, Integration testing, and Springboot to implement a client/serverside transfer service. Utilizing the MVC design pattern, the application allows users to register, login, send, and approve transfers to other users.",
  },
  {
    languages: ["Java","Spring Boot", "PostgreSQL","JUnit",],
    title: "Cash Register Application",
    link: "https://github.com/noah23olsen/m1-capstone",
    imgSrc: require("@/assets/cashRegister.png"),
    description: "[First capstone] Utilizing Java, the POS application allows users to deposit money into their accounts, add items to their carts, and checkout at a respective store. The application also logs past transaction history, viewable as a list of transactions.",
  },
  { 
    languages: ["Arduino","Electrical Engineering"],
    title: "Telegraph",
    imgSrc: require("@/assets/telegraph.jpg"),
    description: "[Side Project] This project enables users to transmit Morse code onto a computer using their fingertips. I employed Arduino IDE for software development and Arduino Uno/electrical components for the hardware. When the user inputs Morse code using the button, the corresponding text is displayed on an external monitor.",
  },
  {
    languages: ["Python","AWS Lambda","AWS EventBridgeScheduler","AWS IAM"],
    title: "Chorebot",
    imgSrc: require("@/assets/chorebot.png"),
    description: "[Side Project] Recognizing the perpetual untidiness in my shared living space, I leveraged my newfound development skills to create a Slack bot using Java and Python. The bot assigns designated chores to household members every Sunday morning, effectively addressing the cleanliness issue.",
  },
  {
    languages: ["Arduino", "3D Printing","Electrical Engineering"],
    title: "Reflected Light To Solar Panel Capturer",
    link: "https://youtu.be/z2Mgc4NLjW4?si=7EE4ZmBwIKO6rcoa",
    imgSrc: require("@/assets/solarCapturer.png"),
    description: "[Hackathon] Part of MakeOHI/O, this project reads photos and moves the contraption to the most efficient light-position. The project utilizes Arduino IDE, 3d-printed cad models, and electrical hardware components. I was one of the two \"business\" major students at the hackathon, coupled with my partners expertise in electrical engineering. This project has really instilled a passion inside me for designing cool hardware/software projects.",
  },
  {
    languages: ["Python","Machine Learning","Kaggle","Linear Regression","KNN","Data Cleaning"],
    title: "Enhancing Autonomous Wine Quality Prediction",
    imgSrc: require("@/assets/IMG_0418.jpg"),
    description: "[Hackathon] My first hackathon, in which I didn't know how to code at all. I wanted to learn more about AI and coding, so I went anyway. Our team used a kaggle dataset, google colab notebooks, python, and some ML libraries to clean a wine quality dataset and predict the quality of wine based on ~10 variables. We originally used linear regression, but pivoted to KNN.",
  },
  {
    languages: ["HTML","CSS"],
    title: "FreeCodeCamp Certification/Projects",
    link: "https://www.freecodecamp.org/certification/NoahOlsen/responsive-web-design",
    imgSrc: require("@/assets/fcc.png"),
    description: "[Extra coursework I took on the side during college] A Responsive Web Design Certification(~300 hours), educating one on the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design. You can check out some of the sites I designed, mainly to see how far my coding skills have come. In hindsight, the design for many of the sites is absolutely atrocious!",
  },
]

    };
  }
};
</script>


<style>
.projectTitle {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: black;
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
  padding: 0 5rem 5rem 5rem;
}
.project {
  transition: transform 0.3s ease;
  background-color: rgb(240, 236, 236);
  border: 5px solid rgb(190, 185, 185);
  border-radius: 10%;
  padding: 0px 2rem 2rem 2rem;
}
.projectsh1 {
  text-align: center;
}
.project:hover {
  cursor: pointer;
  transform: scale(1.05);
}
p.overlay-text {
  text-align: center;
  font-size: 1.5rem;
  text-align: left;
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