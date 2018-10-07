<template>
    <div class="app">
      <!--<my-header></my-header>-->
      <my-headers></my-headers>
      <router-view />
    </div>
</template>

<script>
import myHeader from './components/common/header.vue'
import myHeaders from './components/common/myHeader'
export default {
  name: 'App',
  components:{
    myHeader,
    myHeaders
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .app
    height 100%
</style>
