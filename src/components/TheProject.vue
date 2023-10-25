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
            <p class="projectTitle">{{title}}</p>
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
      window.open(url, "_blank");
    },
}
};
</script>
<style scoped>
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
</style>