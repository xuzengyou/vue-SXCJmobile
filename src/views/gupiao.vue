<template>
  <div class="home">
    <header>
        <router-link to="home"><img src="../assets/gupiao.png" alt=""></router-link>
        <a class="sous" @touchstart="searcht()"><img src="../assets/search.png" alt=""></a>
        <span></span>
        <a class="daoh" @touchstart="navtop()"><img src="../assets/nav.png" alt=""></a>
    </header>
    <!-- 顶部导航按钮内容 -->
    <div class="Tnav" v-show="navfirst">
        <router-link to="home">财经</router-link>
        <router-link to="waihui">外汇</router-link>
    </div>
    <!-- 顶部搜索框 -->
    <div class="search" v-show="search">
        <div class="one">
            <input type="text" name="" id="search" placeholder="请输入关键字" autofocus style="color: #fff;">
            <img src="../assets/search1.png" alt="" class="tabSearch">
        </div>
    </div>
    <div class="main">
            <!-- 轮播图 -->
            <mt-swipe :auto="2000">
              <mt-swipe-item>
                <router-link to="http://www.baidu.com">
                  <img src="../assets/test.jpg" alt="">
                </router-link>
                <router-link to="http://www.baidu.com">我是第一张</router-link>
              </mt-swipe-item>
              <mt-swipe-item>
                <router-link to="http://www.baidu.com">
                  <img src="../assets/test.jpg" alt="">
                </router-link>
                <router-link to="http://www.baidu.com">我是第er张</router-link>
              </mt-swipe-item>
              <mt-swipe-item>
                <router-link to="http://www.baidu.com">
                  <img src="../assets/test.jpg" alt="">
                </router-link>
                <router-link to="http://www.baidu.com">我是第san张</router-link>
              </mt-swipe-item>
            </mt-swipe>
            <!-- 图文结合 -->
            <div class="contain">
                <div class="cont">
                    <a href=""><img src="../assets/test.jpg" alt=""></a>
                    <ul>
                        <li><a href="">短期来看，经济增长尚难言见底经济增长经济增长尚难言见底经济增长</a></li>
                        <li><a href="">
                           ，经济增长尚难言见底经济增长经济增长尚难言见底经济增长
                        </a></li>
                        <li><span>财经</span></li>
                    </ul>
                </div>
                
                
            </div>
            <!-- 侧边导航栏 -->
            <div class="side">
                <div class="Navigation" @touchstart="navside()">
                    <router-link to=""><img src="../assets/side1.png" alt=""></router-link>
                    <router-link to="">导航</router-link>
                </div>
                <div class="home">
                    <router-link to="home"><img src="../assets/side2.png" alt=""></router-link>
                    <router-link to="home">首页</router-link>
                </div>
                <div class="top">
                    <router-link to="#"><img src="../assets/side3.png" alt=""></router-link>
                    <router-link to="#">置顶</router-link>
                </div>
            </div>
        </div>
        <!-- 侧边导航按钮内容 -->
        <div class="Snav" v-show="navTwo">
            <router-link to="home">财经</router-link>
            <router-link to="waihui">外汇</router-link>
        </div>
        <!-- 加载更多 -->
        <div class="getMore">
            <span class="more" data-id="2">加载更多</span>
        </div>
        <Foot></Foot>
  </div>

</template>

<script>
// @ is an alias to /src
// import Header from '@/components/header.vue'
import Foot from '@/components/foot.vue'

export default {
  name: 'home',
  data(){
        return{
            search:false,
            navfirst:false,
            navTwo:false,

        }
    },
  props: {
      // msg: String
  },
  methods:{
      searcht (){
          this.search=!this.search;
      },
      navtop(){
          this.navfirst=!this.navfirst;
          
      },
      navside(){
          this.navTwo=!this.navTwo;
          
      },


  },
  components: {
    Foot
  }
}
</script>
<style scoped>
/* 顶部设置 */
header{
    margin-top: 0.05rem;
    height: 0.6rem;
    line-height: 0.6rem;
    display: flex;
}
header a:nth-child(1){
    width: 2.6rem;
    height: 0.6rem;
    flex-shrink: 0;
}
header a:nth-child(1) img{
    width: 100%;
    height: 100%;
}
header a:nth-child(1){
    margin-right: 3.8rem;
}
header a:nth-child(2){
    display: inline-block;
    line-height: 0.6rem;
    width: 0.4rem;
}
header a:nth-child(2) img{
    width: 0.4rem;
    display: inline-block;
    vertical-align: middle;
}
header span:nth-child(3){
    display: inline-block;
    border-left: 2px solid #0470B8;
    width: 0;
    height: 0.5rem;
    margin-top: 0.05rem;
    vertical-align: middle;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
}
header a:nth-child(4){
    width: 0.4rem;
    height: 0.6rem;
}
header a:nth-child(4) img{
    width: 0.4rem;
    display: inline-block;
}
/* 导航按钮 */
.Tnav{
    width:0.5rem;
    height: 0.5rem;
    background-color: #f5f5f5;
    text-align: center;
    z-index: 10000000000;
    position: absolute;
    top: 0.6rem;
    left: 7rem;
}
.Tnav a{
    display: block;
    font-size: 0.18rem;
    border-bottom: 0.01rem solid #ffffff;
    line-height: 0.25rem;
}
/* 搜索框 */
.search{
    width: 100%;
    height: 0.5rem;
    background-color: #000000;
    opacity: .6;
    padding-top: 0.05rem;
    position: absolute;
    top: 0.7rem;
    z-index: 100000;
    margin-top: 0.05rem;
}
div.yinc{
    display: none;
}
.search .one{
    width: 96%;
    height: 0.4rem;
    line-height: 0.4rem;
    margin:0 auto;
    border: 0.01rem solid #ffffff;
    vertical-align: middle;
    overflow: hidden;
}
.search .one input{
    background-color: #000000;
    font-size: 0.24rem;
    padding-left: 0.1rem;
    display: inline-block;
    vertical-align: middle;
    width: 6.8rem;
    height: 100%;
}
.search .one img{
    display: inline-block;
    cursor: pointer;
    width: 0.25rem;
    height: 0.25rem;
    vertical-align: middle;
    margin-top: -0.05rem;
}
/* 轮播设置 */
.mint-swipe{
  height: 4rem;
}
.mint-swipe .mint-swipe-item img{
  width: 100%;
  height: 100%;
}
.mint-swipe .mint-swipe-item a:last-child{
  position: relative;
  top: -0.8rem;
  left: 1rem;
  display: inline-block;
  width: 5.5rem;
  height: 0.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  color: #ffffff;
  font-size: 0.24rem;

}
/* 主体部分开始 */

.main{
    margin-top: 0.1rem;
}
/* 轮播设置 */
.swiper-container{
    width: 100%;
    height: 3rem;
}
.swiper-slide a:first-child img{
    width: 100%;
}
.swiper-slide a:last-child{
    display: inline-block;
    width: 5rem;
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.3rem;
    position: absolute;
    top: 2.4rem;
    left: 1.2rem;
    z-index: 100000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    color: #ffffff;
}


/* 轮播设置结束 */
.main .contain{
    width: 100%;
}
.main .contain .cont{
    width: 100%;
    height: 2.05rem;
    overflow: hidden;
    display: flex;
    border-bottom: 0.01rem solid #BFBFBF;
}
.main .contain .cont>a{
    width: 3rem;
    height: 1.85rem;
    margin-top: 0.1rem;
    flex-shrink: 0;
    margin-right: 0.2rem;
}
.main .contain .cont>a img{
    display: inline-block;
    width: 100%;
    height: 100%;
}
.main .contain .cont ul{
    margin-top: 0.1rem;
    width: 4rem;
    height: 1.85rem;
    overflow: hidden;
}
.main .contain .cont ul li:nth-child(1){
    text-align: center;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.main .contain .cont ul li:nth-child(1) a{
    font-size: 0.3rem;
    font-weight: bold;
}
.main .contain .cont ul li:nth-child(2){
    text-indent: 0.3rem;
    width: 4rem;
    height: 0.8rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
}
.main .contain .cont ul li:nth-child(2) a{
    font-size: 0.25rem;
}
.main .contain .cont ul li:nth-child(3) span{
    display: inline-block;
    /* width: 0.5rem; */
    /* height: 0.3rem;
    line-height: 0.25rem; */
    border: 0.01rem solid #c30d23;
    text-align: center;
    border-radius: 0.05rem;
    font-size: 0.25rem;
    overflow: hidden;
    margin-top: 0.2rem;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
}
.main .side{
    width: 0.8rem;
    position: fixed;
    top: 7rem;
}
.main .side .Navigation{
    width: 0.8rem;
    height: 0.8rem;
    background-color: #0470B8;
    text-align: center;
    vertical-align: middle;
    padding-top: 0.08rem;
    margin-bottom: 0.15rem;
    overflow: hidden;
}
.main .side .Navigation a:nth-child(1){
    display: block;
    width: 0.45rem;
    height: 0.45rem;
    margin: 0 auto;
    margin-bottom: 0.03rem;
}
.main .side .Navigation a:nth-child(1) img{
    display: block;
    width: 100%;
    height: 100%;
}
.main .side .Navigation a:nth-child(2){
    display: inline-block;
    height: 0.2rem;
    line-height: 0.2rem;
    color: #ffffff;
    font-size: 0.16rem;
    vertical-align: top;
}

.main .side .home{
    width: 0.8rem;
    height: 0.8rem;
    background-color: #0470B8;
    text-align: center;
    vertical-align: middle;
    padding-top: 0.08rem;
    margin-bottom: 0.15rem;
    overflow: hidden;
}
.main .side .home a:nth-child(1){
    display: block;
    width: 0.45rem;
    height: 0.45rem;
    margin: 0 auto;
    margin-bottom: 0.03rem;
}
.main .side .home a:nth-child(1) img{
    display: block;
    width: 100%;
    height: 100%;
}
.main .side .home a:nth-child(2){
    display: inline-block;
    height: 0.2rem;
    line-height: 0.2rem;
    color: #ffffff;
    font-size: 0.16rem;
    vertical-align: top;

}

.main .side .top{
    width: 0.8rem;
    height: 0.8rem;
    background-color: #0470B8;
    text-align: center;
    vertical-align: middle;
    padding-top: 0.08rem;
    margin-bottom: 0.15rem;
    overflow: hidden;
}
.main .side .top a:nth-child(1){
    display: block;
    width: 0.45rem;
    height: 0.45rem;
    margin: 0 auto;
    margin-bottom: 0.03rem;
}
.main .side .top a:nth-child(1) img{
    display: block;
    width: 100%;
    height: 100%;
}
.main .side .top a:nth-child(2){
    display: inline-block;
    height: 0.2rem;
    line-height: 0.2rem;
    color: #ffffff;
    font-size: 0.16rem;
    vertical-align: top;
}
/* 侧边导航按钮 */
.Snav{
    width:0.8rem;
    height: 0.8rem;
    background-color: #f5f5f5;
    text-align: center;
    z-index: 10000000000;
    position: fixed;
    top: 7rem;
    left: 0.8rem;
}
.Snav a{
    display: block;
    font-size: 0.18rem;
    border-bottom: 0.01rem solid #ffffff;
    line-height: 0.4rem;
}
.getMore{
    text-align: center;
    margin-top: 0.2rem;
}
.more{
    display: inline-block;
    font-size: 0.3rem;

}



</style>
