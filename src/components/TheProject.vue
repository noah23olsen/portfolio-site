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
  props:["description","title","link","img"],
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
