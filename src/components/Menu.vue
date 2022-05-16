<template>
  <div class="wrapper-menu">
      <router-link tag="div" to="/home"><img class="twitter-icon" src="@/assets/icons/twitter.svg" alt=""></router-link>
      <div @click="goPage(item)" :class="item.clicked ? 'selected-menu-row':'menu-rows'" v-for="(item,i) in Menu" :key="'menu'+i"><img :class="item.clicked ?'icons-click':'icons'" :src="require('@/assets/icons/'+item.src)" alt=""><span class="row-text">{{item.title}}</span></div>
      <div class="menu-rows"><img class="icons" src="@/assets/icons/more.svg" alt=""><span class="row-text">More</span></div>
      <button class="tweet-button">Tweet</button>
      <div class="bottom-profile">
        <div class="pp-image"></div>
        <div class="name-nickname">
            <p class="name">Kamçılı Ördek</p>
            <p class="nickname">@kamciliordek</p>
        </div>
        <img class="dots-icon" src="@/assets/icons/dots.svg" alt="">
      </div>
  </div>
</template>

<script>
import {Menu} from "@/enum/enum.js"
export default {
    data(){
        return{
            Menu,
        }
    },
    methods:{
        goPage(item){
            for(let a of Menu){
                a.clicked=false;
            }
            item.clicked=true;
            this.$router.push(this.$route.query.redirect|| `${item.path}`);
        }
    }
}
</script>

<style scoped>
.dots-icon{
    width: 22px;
    margin-left: 53px!important;
    margin: 10px;
}
.name{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    color: rgb(217, 217, 217);
    padding-bottom: 2px;
    font-weight: 700;
}
.nickname{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: gray;
    padding-bottom: 2px;
}
.name-nickname{
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    margin-left: 10px;
}
.pp-image{
    width: 42px;
    height: 42px;
    margin-left: 10px;
    border-radius: 50%;
    background: url('../assets/images/pp.jpg');
    background-size: cover;
}
.bottom-profile{
    position: absolute;
    bottom: 12px;
    left: 0;
    min-width: fit-content;
    padding: 10px 2px;
    border-radius: 9999px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    cursor: pointer;
    transition: all .1s ease-in;
}
.bottom-profile:hover{
    background-color: #161616;
}
.tweet-button{
    border: none;
    background-color: #1c9bf0;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 17px;
    text-align: center;
    font-weight: 700;
    color:#fff;
    border: 1px solid black;
    border-radius: 9999px;
    width: 226px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    transition: all .1s ease-in;
    cursor: pointer;
}
.tweet-button:hover{
    background-color: #1b8fdd;
}
.wrapper-menu{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    height: 100vh;
    border-right: 1px solid rgb(65, 65, 65);
}
.menu-rows{
    display: flex;
    align-items: center;
    margin-top: 13px;
    width: fit-content;
    padding-right: 15px;
    padding-left: 3px;
    cursor: pointer;
    transition: all 0.05s ease-in;
}
.menu-rows:hover{
    background-color: #161616;
    border-radius: 20px;
}
.selected-menu-row{
    display: flex;
    align-items: center;
    margin-top: 13px;
    width: fit-content;
    padding-right: 15px;
    padding-left: 3px;
    cursor: pointer;
    background-color: #161616;
    border-radius: 20px;
}
.row-text{
    margin-left: 11px;
    font-size: 20px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(217, 217, 217);
    padding-bottom: 5px;
}
/*İcons*/
.icons{
    width: 44px;
    padding: 9px;
}
.icons-click{
    width: 44px;
    padding: 9px;
    fill: red!important;
}
.twitter-icon{
    width: 48px;
    cursor: pointer;
    padding: 9px;
    margin-top: 5px;
    text-align: center;
}
.twitter-icon:hover{
    border-radius: 9999px;
    background-color: #031018;
}


@font-face {
    font-family: 'Varela';
    src: url('../assets/fonts/VarelaRound-Regular.ttf');
}
</style>