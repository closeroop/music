<template>
  <div class="player">
      <div class="player-info">
        <img src="/static/song/mary.jpg" alt="">
        <div class="player-middle">
          <div class="song-info">玛丽/赵雷</div>
          <div class="music-process"></div>
        </div>
        <div class="player-col">
          <Button  shape="circle" icon="md-skip-backward"></Button>
          <Button  shape="circle" icon="md-pause"></Button>
          <Button  shape="circle" icon="md-skip-forward"></Button>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'playerView'
  }
</script>

<style scoped>
  .player::before{
    content: '';top:0;right:0;bottom:0;left:0;margin:-20px;z-index:-1;position: absolute;
    -webkit-filter:blur(15px);filter:blur(15px);
    background: url("/static/song/p-4.jpg") center/cover no-repeat;opacity: .95;
  }
  .player{
    height: 0px;//background-color: #efefef;position: fixed;bottom: 0;left: 0;width: 100%;
    min-width: 1165px;overflow: hidden;
  }
  .player-info{
    //background-color: aquamarine;margin: 0 10%;
  }
  .player-info:after{
    content: '';
    display: block;
    clear: both;
  }
  .player-info img{
      height: 70px;float: left;
  }
  .player-middle{
     height: 70px;width: 80%;//background: blue;float: left;
  }
  .song-info{
    height: 50px;line-height:50px;font-size: 20px;text-align: center;font-weight: 600;
  }
  .music-process{
    height:4px ;background-color: #ff9900;margin: 12px 5px 6px;border-radius: 4px;
  }
  .player-col{
    width: calc(20% - 70px) ;float: left;height: 70px;line-height: 70px;
    display: flex;align-items: center;justify-content: center;
  }
  .player-col button {
    margin: 0 10px;
  }
  @media (max-width:1380px) {
    .player-info{
      margin: 0 30px;
    }
  }
</style>
