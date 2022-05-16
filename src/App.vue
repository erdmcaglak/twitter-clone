<template>
<div>
  <div class="main-container">
      <app-menu class="menu"></app-menu>
      <router-view class="change-side"></router-view>
      <div><app-trends class="trends"></app-trends></div>
      
  </div>
</div>
</template>

<script>
import Menu from "@/components/Menu.vue"
import Trends from "@/components/Trends.vue"
export default {
  components:{
    appMenu:Menu,
    appTrends:Trends,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}
html{
  background-color: #000;
}
.main-container{
  width: 1260px;
  margin:0 auto;
  
  color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.menu{
  width: 260px;
}
.trends{
  width: 400px;
  position: relative
}
.change-side{
  margin-left: 260px;
  width: 600px;
}
</style>