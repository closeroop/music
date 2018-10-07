<template>
  <div class="show">
    <Loop></Loop>
    <movie-show></movie-show>
    <movie-music></movie-music>
    <player-music></player-music>
  </div>
</template>
<script>
  import Loop from './loopPic.vue'
  import movieShow from './showMovie.vue'
  import movieMusic from './ShowMusic.vue'
  import playerMusic from './playerView.vue'
  export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  components:{
    Loop,
    movieShow,
    movieMusic,
    playerMusic
  }
}
</script>
<style scoped>
  .show{
    min-width: 1165px;
  }
</style>
