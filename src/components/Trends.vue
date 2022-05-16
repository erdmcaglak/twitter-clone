<template>
  <div class="trends">
        <div class="trends-container">
            <div class="search-input">
                <img class="magnify-icon" src="@/assets/icons/magnify.svg" alt="">
                <input placeholder="Search Twitter" type="text">
                
            </div>
            <div class="trend-for-you">
                <div class="trend-for-you-header">
                    <!-- <p class="header-text">Trends for you</p>
                    <img class="settings-icon" src="@/assets/icons/settings.svg" alt=""> -->
                    <p class="header-text">Trends for you</p>
                    <img class="settings-icon" src="@/assets/icons/settings.svg" alt="">
                </div>
                <div class="trends-item" v-for="(item,i) in Trends" :key="'trend'+i">
                    <div class="trends-item-texts">
                        <p class="in-where">{{item.inWhere}}</p>
                        <p class="title">{{item.title}}</p>
                        <p class="number-of-tweets">{{numberOfTweets(item.tweets)}}</p>
                    </div>
                    <img style="width:22px;align-self:flex-start" src="@/assets/icons/dots.svg" alt="">
                </div>
                <div class="show-more">
                    <p>Show More</p>
                </div>
            </div>
            <div class="who-to-follow">
                <div class="who-to-follow-header">
                    <p class="header-text">Who to follow</p>
                </div>
                <div class="who-to-follow-content" v-for="(item,i) in whoToFollow" :key="'who'+i">
                    <div style="display:flex;flex-direction:row;align-items:center">
                        <img class="who-to-follow-pp" :src="require('@/assets/images/'+item.img)" alt="">
                        <div class="who-to-follow-content-item" >
                            <div class="who-to-follow-item-name">
                                <p>{{item.name}}</p>
                                <img class="check-icon" v-if="item.isChecked" src="@/assets/icons/checked.svg" alt="">
                            </div>
                            <p class="who-to-follow-username">@{{item.userName}}</p>
                        </div>
                    </div>
                    <button class="follow-button">Follow</button>
                </div>
                <div class="show-more">
                    <p>Show More</p>
                </div>
            </div>
        </div>
      
  </div>
</template>

<script>
import {Trends,whoToFollow} from "@/enum/enum.js"
export default {
    data(){
        return{
            Trends,
            whoToFollow,
        }
    },
    methods:{
        numberOfTweets(count){
            if(count>=10000)
                return Math.floor(count/1000) +'.'+Math.floor((count%1000)/100)+'K Tweets'
                
            else if (count<10000 && count>=1000){
                if(count%1000==0)
                    return count/1000+ 'K Tweets'
                else
                    return Math.floor(count/1000)+','+count%1000 + ' Tweets'
            }
            else{
                return count+' Tweets'
            }
                
        }
    }
}
</script>

<style scoped>
.trends-item-texts{
    display: flex;
    flex-direction: column;
}
.follow-button{
    background-color: #eff3f4;
    padding: 6px 16px;
    align-items: stretch;
    border-radius: 9999px;
    border: none;
    border: 1px solid #000;
    color: #0f1419;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    cursor: pointer;
}
.follow-button:hover{
    background-color: #D7DBDC;
}
.who-to-follow-pp{
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-size: cover;
}
.who-to-follow-content{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    cursor: pointer;
}
.who-to-follow-content:hover{
    background-color: #1C1F23;
}
.who-to-follow-username{
    color: #6e767d;
    font-size: 15px;
}
.who-to-follow-content-item{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding-left: 12px;
}
.check-icon{
    margin-left: 2px;
    width: 20px;
}
.who-to-follow-item-name{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 700;
}
.show-more{
    font-size: 15px;
    padding:16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #1d9bf0;
    border-radius: 0px 0px 16px 16px;
    cursor: pointer;
}
.show-more:hover{
    background-color: #1C1F23;
}
.number-of-tweets{
    font-size: 13px;
    color: #6e767d;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.title{
    font-size: 17px;
    color: #d9d9d9;
    padding: 2px 0px;
    font-weight: 700;
}
.in-where{
    font-size: 13px;
    color: #6e767d;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.trends-item{
    padding: 12px 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    min-height: 82px;
}
.trends-item:hover{
    background-color: #1C1F23;
}
.header-text{
    color: #D9D9D9;
    font-size: 19px;
    font-weight: 800;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.settings-icon{
    width: 38px;
    border-radius: 9999px;
    padding: 9px;
    cursor: pointer;
}
.settings-icon:hover{
    background-color: #2B2F32;
}

.trend-for-you-header{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 6px 16px;
}
.who-to-follow-header{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
}
.trends-container{
    width: 353px;
    margin-left: 50%;
    transform: translate(-48%,0);
}
.trend-for-you{
    display: flex;
    flex-direction: column;
    background-color: #15181C;
    border-radius: 16px;
    margin-top: 15px;
}
.who-to-follow{
    display: flex;
    flex-direction: column;
    background-color: #15181C;
    border-radius: 16px;
    margin-top: 15px;
}
.magnify-icon{
    position: absolute;
    width: 19px;
    top: 50%;
    transform: translate(0,-50%);
    left: 22px;
}
.trends{
    position: fixed;
    min-height: 100vh;
    border-left: 1px solid rgb(65, 65, 65);
    display: flex;
    flex-direction: column;
}
.search-input{
    position: relative;
    width: 100%;
    margin-top: 4px;
}
input{
    border: none;
    height: 46px;
    font-size: 15px;
    width: 100%;
    padding-left: 59px;
    color: #fff;
    border-radius: 9999px;
    background-color: #202327;
    outline-color: rgb(18, 94, 148)
    
}

</style>