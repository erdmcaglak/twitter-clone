<template>
  <div class="home">
      <div class="home-page">
        <div class="home-header">
          <p class="home-header-text">Home</p>
          <img class="stars-icon" src="@/assets/icons/stars.svg" alt="">
        </div>
      </div>
      <div class="what-happening">
        <div class="pp-image"></div>
        <div class="typing-side">
          <textarea
            class="text-area js-autoresize"
            placeholder="What's happening?"
            rows="1"
          ></textarea>
          <div class="icons-and-button">
            <div class="whats-happening-icons" v-for="(item,i) in whatsHappeningIcons" :key="'icon'+i">
              <img class="icons" :src="require('@/assets/icons/'+item.src)" alt="">
            </div>
          </div>
        </div>
      </div>
      

  </div>
</template>

<script>
import Trends from "@/components/Trends.vue"
import { setResizeListeners } from "@/components/home_components/auto-resize.js";
import {whatsHappeningIcons} from "@/enum/enum.js"
export default {
  data(){
    return{
      whatsHappeningIcons
    }
  },
  components:{
    appTrends:Trends,
    setResizeListeners,
  },
  mounted() {
    setResizeListeners(this.$el, ".js-autoresize");
  },
  
}
</script>

<style scoped>
.icons{
  width: 20px;
}
.whats-happening-icons{
  cursor: pointer;
  min-width: 36px;
  min-height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.whats-happening-icons:hover{
  background-color: rgb(29, 155, 240,0.1);
}
.icons-and-button{
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
}
.typing-side{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
}
.text-area{
  resize: initial;
  overflow:hidden;
  margin-left: 15px;
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  height: fit-content;
  padding: 12px 0px;
}
.what-happening{
  border-bottom: 1px solid rgb(65, 65, 65);
  padding: 12px 16px;
  display: flex;
  flex-direction: row;
  height: fit-content;
}
.pp-image{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: url('../assets/images/pp.jpg');
    background-size: cover;
}
.stars-icon{
  width: 38px;
  padding: 9px;
}
.stars-icon:hover{
  background-color: #181919;
  border-radius: 9999px;
}
.home-header-text{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #d9d9d9;
  padding: 12px 16px;
}
.home-header{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(65, 65, 65);
}
.home-page{
  width: 600px;
  display: flex;
  flex-direction: column;
}
.home{
  display: flex;
  flex-direction: column;
}
</style>