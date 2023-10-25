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
      //gets size of element in relation to viewport
      const iconPosition = this.$refs.scrollIcon.getBoundingClientRect().bottom;
      window.scrollTo({
        top: iconPosition,
        behavior: 'smooth'
      })
    }
  }
};
</script>
<style scoped>
i.uil-angle-down{
  font-size:3rem;
  display:flex;
  justify-content: center;
}
i:hover{
  color:darkgray;
  transform: scale(1.05);
  cursor:pointer
}
.about-me {
  display: flex;
  align-items: center;
  height:80vh;
}

div.about-me-content {
  padding: 9rem 5rem 9rem 9rem;
  flex: 1;
  width:80%;
}
.about-me-text{
  font-size: 1.4rem;
  line-height: 1.4; 
}
img {
  padding-right: 2rem;
  width: 20rem;
  height: auto;
  border-radius: 3rem 4rem 4rem 3rem;
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
    border-radius: 2rem 2rem 2rem 2rem;
  }
  .about-me{
    height:fit-content;
  }
  .about-me p{
    font-size:1rem;
  }
}
</style>