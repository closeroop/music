<template>
  <div>
    <h1>VIPassdsad </h1>
    <router-link :to="{ path:'/'}">home</router-link>
  </div>
</template>
<script>
  export default {
      beforeRouteEnter(to,from,next){
        next(vm=>{
         console.log(vm)
       });
    },
    beforeRouteLeave(to,from,next){
      this.name=to.params.id;
      console.log(this)
      const answer=window.confirm('do you really want to leave?you1 have unsaved change!')
      if (answer){
        next()
      }else{
        next(false)
      }
    }
  }
</script>
