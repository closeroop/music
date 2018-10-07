<template>
    <div class="movieMusic">
      <div class="music-head">
        <Icon type="ios-musical-note" /> Music
        <span>本周推荐</span>
      </div>
      <Row class="music-body">
        <Col span="18">
           <div class="musics">
             <img src="/static/song/mary.jpg" alt="zl">
             <div class="music-info"><p>玛丽/赵雷 </p></div>
           </div>
          <div class="musics">
            <img src="/static/song/p-4.jpg" alt="ll">
            <div class="music-info">北京啊/赵雷  </div>
          </div>
          <div class="musics">
            <img src="" alt="">
          </div>
          <div class="musics">
            <img src="/static/song/mary.jpg" alt="zl">
            <div class="music-info"><p>玛丽/赵雷 </p></div>
          </div>
          <div class="musics">
            <img src="/static/song/p-4.jpg" alt="ll">
            <div class="music-info">北京啊/赵雷  </div>
          </div>
          <div class="musics">
            <img src="" alt="">
          </div><div class="musics">
          <img src="/static/song/mary.jpg" alt="zl">
          <div class="music-info"><p>玛丽/赵雷 </p></div>
        </div>
          <div class="musics">
            <img src="/static/song/p-4.jpg" alt="ll">
            <div class="music-info">北京啊/赵雷  </div>
          </div>
          <div class="musics">
            <img src="" alt="">
          </div><div class="musics">
          <img src="/static/song/mary.jpg" alt="zl">
          <div class="music-info"><p>玛丽/赵雷 </p></div>
        </div>
          <div class="musics">
            <img src="/static/song/p-4.jpg" alt="ll">
            <div class="music-info">北京啊/赵雷  </div>
          </div>
          <div class="musics">
            <img src="" alt="">
          </div><div class="musics">
          <img src="/static/song/mary.jpg" alt="zl">
          <div class="music-info"><p>玛丽/赵雷 </p></div>
        </div>
          <div class="musics">
            <img src="/static/song/p-4.jpg" alt="ll">
            <div class="music-info">北京啊/赵雷  </div>
          </div>
          <div class="musics">
            <img src="" alt="">
          </div><div class="musics">
          <img src="/static/song/mary.jpg" alt="zl">
          <div class="music-info"><p>玛丽/赵雷 </p></div>
        </div>
          <div class="musics">
            <img src="/static/song/p-4.jpg" alt="ll">
            <div class="music-info">北京啊/赵雷  </div>
          </div>
          <div class="musics">
            <img src="" alt="">
          </div>
        </Col>
        <Col span="6">col-12</Col>
      </Row>
    </div>
</template>

<script>
  export default {
    name: 'music'
  }
</script>

<style scoped>
  .movieMusic{
     margin: 0 10%;
  }
  .music-head{
    height: 35px;line-height: 35px;color: #3d3d3d;margin:10px 0 ;background-color: #19be6b;
    padding: 0 20px;
  }
  .music-body>div{
    height: 320px;background-color: #f4f6f8;
    display: flex;
    justify-content: space-between; flex-wrap: wrap;
  }
  .musics{
      height: 40px;width: 30%;background-color: #e8eaec;margin: 5px;
      border-radius: 5px;overflow: hidden;
  }
  .musics:hover{
    background-color: #dcdee2
  }
  .musics img{
     height:36px;width: 36px;float: left;margin: 2px;
  }
  .music-info{
    float: left;line-height: 40px;padding: 0 10px;color: black;width: calc(100% - 40px);
  }
  .music-info p{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  @media (max-width:1380px) {
    .movieMusic{
      margin: 0 30px;
    }
  }
</style>
