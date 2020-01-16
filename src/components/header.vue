<template>
<div>
    <header>
        <router-link to="home"><img src="../assets/caijing.png" alt=""></router-link>
        <a class="sous" @touchstart="searcht()"><img src="../assets/search.png" alt=""></a>
        <span></span>
        <a class="daoh" @touchstart="navtop()"><img src="../assets/nav.png" alt=""></a>
    </header>
    <!-- 顶部导航按钮内容 -->
    <div class="Tnav" v-show="navfirst">
        <a href="">股票</a>
        <a href="">外汇</a>
    </div>
    <!-- 顶部搜索框 -->
    <div class="search" v-show="search">
        <div class="one">
            <input type="text" name="" id="search" placeholder="请输入关键字" autofocus style="color: #fff;">
            <img src="../assets/search1.png" alt="" class="tabSearch">
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            search:false,
            navfirst:false,

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
            
        }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

</style>
