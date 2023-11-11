<template>
      <section class="about-me">
        <div class="about-me-content">
          <h1>Hello!</h1>
          <p class="about-me-text">
            My name is Noah-- and I'm on a mission to build the future through
            the integration of business and technology. Last summer, I
            worked at an innovative venture capital firm and was given the
            opportunity to work alongside some of the most exciting technologies
            of our future. During this, an undeniable urge kept growing inside
            me, I needed to be a part of this as soon as possible! Thus, I put
            my college journey on hiatus, enrolled in a software engineering
            bootcamp, and am now learning to build the technology of the future.
            In my spare time, I enjoy studying history's greatest entrepreneurs,
            exploring all aspects of the world through the lens of business, and
            discovering the inefficiencies of humanitarian efforts.
          </p>
          <br>
          <p class="about-me-text">
            I had the pleasure of graduating this August, and am now searching
            for high-impact jr. software engineering roles. Interested in
            chatting? Send a direct message on LinkedIn or reach out at
            noah23olsen@gmail.com
          </p>
           <!-- <button @click="downloadResume">Download Resume</button> -->
          <!-- <img src="/img/resume.ea7b3918.png" alt="" data-v-6cb1b4f6="">  -->
            <a href="/img/resume.ea7b3918.png" download>Download Resume</a>
            <!-- <img src="../assets/resume.png" alt=""> -->
        </div>
          <img class="about-me-image" src="../assets/noah_olsen.png" />
      </section>
      <i ref="scrollIcon" @click="scrollDown" class="uil uil-angle-down"></i>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    scrollDown(){
      const targetElement = document.querySelector('.uil'); // Replace with your target element class
      const targetPosition = targetElement.offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  },
    downloadResume() {
      // Construct the URL to the resume.png file
      const resumeUrl = "/assets/resume.png";

      // Simulate the download by navigating to the file URL
      window.location.href = resumeUrl;
    },
  }
</script>
<style scoped>
i.uil-angle-down{
  font-size: 3rem;
  position: absolute; /* or absolute, depending on your layout */
  bottom: 0%; /* Adjust this value to position the icon closer or further from the bottom */
  left: 50%; /* Center the icon horizontally */
}
i:hover{
  color:darkgray;
  transform: scale(1.05);
  cursor:pointer
}
.about-me {
  display: flex;
  align-items: center;
  min-height:90vh;
}

div.about-me-content {
  width:80%;
  padding:5rem;
}
.about-me-text{
  font-size: 1.4rem;
  line-height: 1.4; 
}
img {
  padding-right: 2rem;
  width: 20rem;
  height: auto;
  border-radius: 50px 80px 80px 50px;
}
h1{
  font-size:2.3rem;
}
@media only screen and (max-width: 500px) {
  section.about-me {
    display: flex;
    flex-direction: column;
  }
  img.about-me-image{
  }
  .about-me{
    height:fit-content;
  }
  .about-me p{
    font-size:1rem;
  }
  div.about-me-content{
    padding:0.5rem;
  }
}
</style>