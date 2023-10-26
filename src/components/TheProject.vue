<template>
 <div
          class="project"
          @click="redirectToLink(link)"
          @mouseover="showOverlay = true"
          @mouseleave="showOverlay = false"
        >
          <div class="overlay" v-if="showOverlay">
            <p class="overlay-text">
            <!-- use mustache for text & props  -->
             {{description}}
            </p>
            <div class="languages-container">
             <span v-for="language in languages" :key="language" class="language">
                {{language}}
              </span>
            </div>
          </div>
          <div v-else>
            <div class="titleContainer">
              <p class="projectTitle">{{title}}</p>
              <svg class="goTo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="arrow-up-right"><path fill="#000000" d="M17.92,6.62a1,1,0,0,0-.54-.54A1,1,0,0,0,17,6H7A1,1,0,0,0,7,8h7.59l-8.3,8.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L16,9.41V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17.92,6.62Z"></path></svg>
              <svg class="infoIcon" @click="this.showOverlay=true" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="info"><path fill="#000000" d="M12,10a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,6Z"></path></svg>
            </div>
             <!-- standard prop with binding -->
            <img :src="img" /> 
          </div>
        </div>
</template>

<script>
export default {
  //props we pass to child class
  props:["description","title","link","img","languages"],
data(){
  return{
    showOverlay:false
  }
},
methods:{
redirectToLink(url) {
  if(!window.matchMedia("(max-width: 767px)").matches)
      window.open(url, "_blank");
    },
}
};
</script>
<style scoped>

@media only screen and (max-width:4000px) {
  .language{
    padding: 0.5rem;
    border: 1px solid #000; /* Change to your desired border color */
    border-radius: 5px;
    margin:0 0 0 0.2rem;
      }
  .languages-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem; /* Space between each language tag */
}
  .titleContainer{
    display:flex;
    justify-content: center;
    align-items:center;
    
  }
  .goTo {
    height:3rem;
    width: 3rem;
    border:2px solid black;
    border-radius: 5rem;
  }
  .infoIcon{
    display:none;
  }
}
  @media only screen and (max-width: 500px) {
    .infoIcon{
      display:block;
      height:2rem;
      width: 2rem;
      border:2px solid black;
      border-radius: 5rem;
      margin-left:1rem;
      margin-top:0.2rem;
      
      /* margin:0.5rem; */
    }
    .goTo{
      display:none;
    }
  }
</style>