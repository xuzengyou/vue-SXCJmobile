<template>
  <div class="notfound">
    <h1>Not Found</h1>
    
  </div>
</template>

<script>
export default {
  name:"notfound",
  data(){
    return{
      path:""
    }
  },
  mounted() {
      // this.path = this.$route.path;
      // console.log()
  }

  
}
</script>
<style scoped>
  h1{
    color: red;
    font-size: 24px;
    text-align: center;
  }
</style>
