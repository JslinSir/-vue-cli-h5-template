<!-- 
  - 我的资产
 -->
<template>
   <div>
       <div @click="handleTODetail">我的</div>
    
   </div>
</template>
<script>
export default {
  name: "Mine",
  components: {
 
  },
  methods:{
    handleTODetail(){
     this.$router.push({name:'TaskDetail'})
    }
  }
   
};
</script>


<style lang="scss">
 

</style>
