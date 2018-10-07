<template>
    <div class="movieShow">
       <div class="movie-head">
            <Icon type="ios-videocam" /> 视频
       </div>
      <Row class="movie-body">
         <Col span="18">
            <div class="movies">
              <a href="#"></a>
              <div class="simple-info">
                <p><a href="#">自从我从西藏回来....</a></p>
                <Icon type="ios-send" />小虎 &nbsp;
                <Icon type="ios-time-outline" /> 2018-9-1  &nbsp;
                <Icon type="md-play" />1.2k
              </div>
            </div>
            <div class="movies"></div><div class="movies"></div>
            <div class="movies"></div><div class="movies"></div><div class="movies"></div>
         </Col>
         <Col span="6" >
          <div class="movie-rank">
            <h2>高山流水</h2>
            <ul class="rank-list">
              <li><img src="/static/img/login-4.jpg" alt=""><a href="">步履不停</a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
            </ul>
          </div>

        </Col>
      </Row>
    </div>
</template>
<script>

</script>
<style scoped>
  .movieShow{
    margin: 0 10%;
  }
  .movie-head{
    height: 35px;line-height: 35px;color: #3d3d3d;margin:10px 0 ;background-color: #19be6b;
    padding: 0 20px;
  }
  .movie-body>div{
    height: 400px;background-color: #e8eaec;
    display: flex;
    justify-content: space-between; flex-wrap: wrap;
  }
  .movies{
    height: 180px;width: 30%;background-color: #dcdee2;margin: 10px;position: relative;
    overflow: hidden;
  }
  .movies:hover .simple-info{
    bottom: 0;transition: all .5s;
  }
  .movies>a{
    display: block;height: 100%;width: 100%;//background-color: rebeccapurple;
  }
  .simple-info{
    position: absolute;bottom: -17px;left: 0;background-color: rgba(0, 0, 0, 0.3);width: 100%;
    padding:2px 5px;color: #eef0f4;transition: all .5s;
  }
  .simple-info a{
     color: #eef4fb;
  }
  .simple-info a:hover{
     text-decoration: underline;
  }
  .movie-rank{
     width: 100%;
  }
  .movie-rank h2{
    text-align: center;height: 50px;line-height: 50px;width: 100%;
  }
  .rank-list {
    padding: 20px 0;
  }
  .rank-list li{
     list-style-type: none;height: 40px;background-color: #d5d5d5;border-bottom: 1px solid #ededed;
     margin: 5px 20px;//line-height: 40px;border-radius: 5px;
  }
  @keyframes updown {
      from {  transform: rotate(0deg);}
      to { transform: rotate(10deg); }
  }
  .rank-list li:last-child{
     animation: updown 2s infinite alternate;
     transform-origin: 0 0;
  }
  .rank-list li img{
    height: 100%;width: 60px;
  }
  .rank-list li a{
    padding: 0 5px;display: block;width: calc(100% - 60px);float: left;height: 100%;
    line-height: 40px;color: white;text-align: center;transition: all .3s;
  }
  .rank-list li:hover{
     background-color: #c2c2c2;transition: all .3s;animation-play-state: paused;
  }
  @media (max-width:1380px) {
    .movieShow{
      margin: 0 30px;
    }
  }
</style>
