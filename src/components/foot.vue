<template>
    <!-- 底部声明 -->
    <footer>
        <p><span>Copyright @ 2017 10Xun All Rights Reserved</span></p>
        <p><span>10讯公司 版权所有</span></p>
    </footer>
</template>

<script>
export default {
    data(){
        return{
            

        }
    },
    props: {
        // msg: String
    },
    methods:{
        

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
    padding-top: 0.5rem;
    text-align: center;
}
footer p:nth-child(1) span{
    font-size: 0.25rem;
}
footer p:nth-child(2) span{
    font-size: 0.25rem;
}

</style>
