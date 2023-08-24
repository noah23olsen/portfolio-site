<template>
  <!-- Main content -->
  <main class="main-content">
    <div class="container">
      <section class="about-me">
        <div class="about-me-content">
          <div class ="wip-content">
          <h1 class ="wiph1">Note: this site is a work in progress 8/24/2023</h1>
          </div>
          <h1>About Me</h1>
          <p>
        My name is Noah-- and I'm on a mission to upend the solar system through the integration of business and technology.
This past summer, I worked at an innovative venture capital firm and was given the opportunity to work alongside some of the most exciting technologies of our future.
During this, an undeniable urge kept growing inside me, I needed to be a part of this as soon as possible!
Thus, I put my college journey on hiatus, enrolled in a software engineering bootcamp, and am now learning to build the technology of the future.
In my spare time, I enjoy studying history's greatest entrepreneurs, exploring all aspects of the world through the lens of business, and discovering the inefficiencies of humanitarian efforts.
I'll be graduating from my boot camp this August, and am searching for high-impact jr. software engineering roles.
Interested in chatting? Send a direct message or reach out at noah24olsen@gmail(dot)com
          </p>
        </div>
        <div class="about-me-image">
          <img :src="imageSrc">
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      imageSrc: require('@/assets/noah_olsen.png')
    }
}
}
</script>

<style scoped>
.main-content {
  padding: 50px 0;
}
.about-me {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
}

.about-me-content {
  flex: 1;
  padding-left:10rem;
  width:50%;
}

.about-me h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

.about-me p {
  font-size: 1.2em;
}

.about-me-image img {
  width: 300px;
  height: auto;
  padding:5rem;
  border-radius:6rem;
}
.wiph1{
  color:white;
}
.wip-content{
  border:1px solid gray;
  background-color:black;
  text-align: center;
}
</style>