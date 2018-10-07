<template>
  <div class="music">
    <div class="background"></div>
    <div class="music-rapper">
      <div class="song">
        <div class="left">
          <div class="list-head">
            <Button>收藏</Button>
            <Button>删除</Button>
            <Button>清空列表</Button>
          </div>
          <div class="song-list">
            <ul>
              <li class="border-1px">
                <div class="edit">
                  <Checkbox v-model="single"></Checkbox>
                </div>
                <div class="number"></div>
                <div class="song-name">歌曲</div>
                <div class="songer">歌手</div>
                <div class="time">时长</div>
              </li>
              <li class="border-1px">
                <div class="edit">
                  <Checkbox v-model="single"></Checkbox>
                </div>
                <div class="number">1</div>
                <div class="song-name">
                  <p>等我们老了，就定居在重庆</p>
                  <div class="song-edit">
                    <div class="play"><Icon type="ios-play-outline" size="18"/></div>
                    <div class="delete"><Icon type="ios-trash-outline" size="18"/></div>
                  </div>
                </div>
                <div class="songer">房东的猫</div>
                <div class="time">04:30</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="right">
          <div class="rapper">
            <div class="picture">
              <img src="../../assets/cq.jpg" alt="">
            </div>
            <div class="desc">
              <ul>
                <li>歌曲名：等我们老了，就定居在重庆</li>
                <li>歌手：房东的猫</li>
              </ul>
            </div>
            <div class="lyric" ref="lyric_box">
              <ul :style="lyric_move">
                <li v-for="(line,key,index) of lyric" :key="index" :class="{'on': key === currentLine}">{{line}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
     <div class="player">
       <div class="audio">
         <audio autoplay ref="audio" @play="startPlay" @timeupdate="changeBar">
           <source src="../../assets/cq.mp3" type="audio/mpeg">
         </audio>
       </div>
       <div class="player-ctrl">
         <div class="pre"><Icon type="ios-skip-backward" size="32"/></div>
         <div class="stop-continue" @click="pause_play">
           <Icon type="ios-pause" size="32" v-show="!pause"/>
           <Icon type="ios-play" v-show="pause" size="32"/>
         </div>
         <div class="next"><Icon type="ios-skip-forward" size="32"/></div>
       </div>
       <div class="song-process">
         <div class="song-info">
           <span><a href="#">等我们老了，就定居在重庆</a> - <a href="#">房东的猫</a></span>
           <span class="time">{{ currentTime | formatTime }} / {{ duration | formatTime }}</span>
         </div>
         <div class="process-bar">
           <div class="rapper">
             <div class="current-bar" :style="current_bar"></div>
             <div class="icon" :style="current_icon">
               <Icon type="ios-musical-note" />
             </div>
           </div>
         </div>
       </div>
       <div class="song-setting">
         <div class="model"><Icon type="ios-infinite" size="24"/></div>
         <div class="like"><Icon type="md-heart-outline" size="24"/></div>
         <div class="comment"><Icon type="ios-chatboxes-outline" size="24"/></div>
         <div class="voice">
           <Icon type="ios-volume-up" size="28" />
           <div class="voice-rapper">
             <div class="current-bar"></div>
             <div class="icon">
               <Icon type="ios-musical-note" />
             </div>
           </div>
         </div>
       </div>
     </div>
    </div>
  </div>

</template>
<script>
import axios from 'axios'
import {analyze,addZero} from '../../assets/js/minix'
export default {
  name: 'Music',
  data () {
    return {
      single: false,
      lyric: {},
      pause: false,
      currentTime: 0,   // 当前播放已播放时间 （秒）
      currentLine: '0', //高亮当前行秒数
      lyricLine: 0,     //歌词位移行数
      duration: 0,   // 音乐总时间 （秒）
      percent: 0,   // 进度条百分比
      TIME_LINE: []  // 歌词预定义时间数组
    }
  },
  computed: {
    current_bar () {   //进度条
      return {
        width: this.percent + '%'
      }
    },
    current_icon () { //进度条上的icon
      return {
        left: this.percent + '%'
      }
    },
   lyric_move () {  //歌词位移行数
      return {
        transform: 'translateY(-' + (this.lyricLine * 25) + 'px)',
        transition: 'all .5s ease-out'

      }
   }
  },
  methods: {
    getLyric(){
      axios.get('/api/cq.json').then(this.showLyric)
    },
    showLyric(res){
      let lyric = res.data.lyric
      if (lyric) {
        let lrcJson = analyze(lyric)
        for (let time in lrcJson) {
          this.TIME_LINE.push(time)
        }
        this.$nextTick(() => {
          this.lyric =lrcJson
        })
      }
    },
    pause_play () { // 暂停-播放
      let audio = this.$refs.audio
      if (audio.paused) {
        audio.play()
        this.pause = false
      } else {
        audio.pause()
        this.pause = true
      }
    },
    startPlay () {  //audio的play事件
      let audio = this.$refs.audio
      this.duration = audio.duration
    },
    changeBar () {  //audio 的 timeupdate 事件 监听 currentTime、percent、currentLine、lyricLine
      let audio = this.$refs.audio
      this.currentTime = audio.currentTime
      this.percent = (this.currentTime/this.duration*100).toFixed(2)
      if (Number(this.TIME_LINE[this.TIME_LINE.length-1]) <= Math.floor(this.currentTime)) {
        this.currentLine = this.TIME_LINE[this.TIME_LINE.length-1]
        return 0
      }
      for (let i = 0;i < this.TIME_LINE.length;i++) {
        if(Number(this.TIME_LINE[i]) > Math.floor(this.currentTime)){
          this.currentLine = this.TIME_LINE[i-1]
          this.lyricLine = i-1
          break
        }
      }
    }
  },
  filters: {
    formatTime (time) {  //过滤时间
      let M = addZero(Math.floor(time/60))
      let S = addZero(Math.floor(time%60))
      return `${M}:${S}`
    }
  },
  mounted () {
    this.getLyric()
    let lyric_box = this.$refs.lyric_box
    lyric_box.style.paddingTop = lyric_box.clientHeight/2-25 + 'px'
    window.onresize = () => {
      lyric_box.style.paddingTop = lyric_box.clientHeight/2 + 'px'
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~styles/mixins.styl"
  >>> .ivu-checkbox-checked .ivu-checkbox-inner
    border-color #ededed !important
  ::-webkit-scrollbar
    width: 6px
    height: 8px
  ::-webkit-scrollbar-thumb
    border-radius: 5px
    background-color: rgba(114, 114, 114, 0.2)
  ::-webkit-scrollbar-thumb:hover
    background-color: rgba(114, 114, 114, 0.4)
  ::-webkit-scrollbar-track
    background-color: transparent
  .music
    height 100%
    position relative
    overflow hidden
    .background
      position absolute
      top 0
      right 0
      height 100%
      width 100%
      background url("../../assets/cq.jpg") center/cover no-repeat
      filter blur(20px)
      transform scale(1.1)
    .music-rapper
      position absolute
      padding-top 1.6rem
      top 0
      right 0
      bottom 0
      left  0
      z-index 1
      background-color rgba(0, 0, 0, 0.1)
      .song
        display flex
        height 100%
        padding-bottom 2.2rem
        .left
          flex 1
          padding-left 8%
          height 100%
          .list-head
            padding .2rem 0
            button
              background-color transparent
              color rgba(255,255,255,.6)
              min-width 2rem
              margin-right .1rem
              &:hover
                border 1px solid white
                color white
          .song-list
            overflow-y auto
            height calc(100% - 1.04rem)
            ul
              height 150%
              li
                display flex
                height 1rem
                line-height 1rem
                margin-right 1rem
                color rgba(255,255,255,.6)
                &:hover
                  color rgba(255,255,255,.8)
                border-1px(rgba(255,255,255,.1))
                .edit
                  width 1rem
                  >>> .ivu-checkbox-inner
                    background-color transparent
                    border-color rgba(255,255,255,.4)
                  >>> .ivu-checkbox-focus
                    box-shadow  none
                .number
                  width .5rem
                  text-align right
                  padding 0 .2rem
                  font-size .28rem
                  font-family "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif
                .song-name
                  flex 1
                  position relative
                  &:hover
                    .song-edit
                      display block
                  .song-edit
                    position absolute
                    top 0
                    right .2rem
                    display none
                    div
                      height .6rem
                      width .6rem
                      display inline-block
                      text-align center
                      line-height .55rem
                      &:hover
                        .ivu-icon
                          color rgba(255,255,255,1)
                          cursor pointer
                .songer
                  width 2rem
                .time
                  width 1rem
        .right
          min-width 30%
          height 100%
          .rapper
            width 4rem
            margin 0 auto
            height 100%
            .picture
              width 3.8rem
              height 3.8rem
              margin 10% auto .5rem
              img
                width 100%
                height 100%
                border-radius .05rem
            .desc
              margin-bottom .5rem
              li
                text-align center
                line-height .5rem
                color rgba(255, 255, 255, 0.6)
            .lyric
              height calc(100% - 7rem)
              //padding-top 50%
              overflow hidden
              li
                text-align center
                line-height .5rem
                color rgba(255, 255, 255, 0.6)
              .on
                color #fff
                transition all .5s ease-out
      .player
        height 2.2rem
        margin-top -2.2rem
        display flex
        padding .5rem 6.5%
        .player-ctrl
          width  4rem
          display flex
          align-items center
          div
            width 20%
            text-align center
            color rgba(255,255,255,.6)
            cursor pointer
            margin 0 6.5%
            &:hover
              color #fff
        .song-process
          flex 1
          padding .3rem .5rem
          color rgba(255,255,255,.6)
          .song-info
            a
              color rgba(255,255,255,.6)
              &:hover
                color #fff
            .time
              float right
          .process-bar
            padding .12rem 0
            .rapper
              width 100%
              height 2px
              background-color rgba(255,255,255,.4)
              position relative
              .icon
                position absolute
                top -9px
                left 0
                z-index 100
                color #fff
                font-size .24rem
                transform translateX(-5px)
              .current-bar
                position absolute
                top 0
                left 0
                height 2px
                background-color #fff
        .song-setting
          width 8rem
          display flex
          align-items center
          >div
            min-width 10%
            text-align center
            color rgba(255,255,255,.6)
            margin 0 .2rem
            &:hover
              cursor pointer
              color #fff
          .voice-rapper
            display inline-block
            min-width 2rem
            height 2px
            background-color rgba(255,255,255,.4)
            position relative
            margin-bottom .05rem
            margin-left .1rem
            .icon
              position absolute
              top -9px
              left 0
              z-index 100
              color #fff
              font-size .24rem
              transform translateX(-5px)
            .current-bar
              position absolute
              top 0
              left 0
              height 2px
              background-color #fff
</style>
