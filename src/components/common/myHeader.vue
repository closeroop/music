<template>
    <div class="rapper">
        <div class="blur"></div>
        <nav class="nav">
           <div class="left">
             <ul class="list">
               <router-link tag="li" to="/music">视频</router-link>
               <router-link tag="li" to="/music">图画</router-link>
               <router-link tag="li" to="/music">音乐</router-link>
               <router-link tag="li" to="/music">小C放映室</router-link>
             </ul>
           </div>
          <div class="log">
            <a href="/"><span style="font-size: 32px;color: #c0e9fb">C</span>loseroop</a>
          </div>
          <div class="right">
            <div class="logBox"  v-if="11>2">
              <Button type="text" ghost >注册</Button>
              <Button type="text" ghost>登录</Button>
            </div>
            <ul class="logInfo" v-if="11<2">
              <li><a href="">个人中心</a></li>
              <li ><a href="">我的消息</a></li>
              <li divided><a href="">退出登录</a></li>
            </ul>
          </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'myHeader'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .rapper
    position fixed
    top .25rem
    right .25rem
    left .25rem
    height 1.2rem
    overflow hidden
    z-index 2
    border-radius .08rem
    .blur
      position absolute
      top 0
      right 0
      height 100%
      width 100%
      filter blur(10px)
      background-color rgba(255, 255, 255, .2)
      transform scale(1.1)
    .nav
      display flex
      position absolute
      top 0
      right 0
      height 100%
      width 100%
      line-height 1.2rem
    .left
      flex  1
      ul.list
        &:after
          content ''
          display block
          clear both
        li
          float left
          margin 0 .2rem
          min-width 1.8rem
          text-align center
          color rgba(255, 255, 255, 0.8)
          &:hover
            color #fff
            background-color rgba(255, 255, 255, 0.2)
            transition .3s all ease-out
            cursor pointer
    .log
      width 250px
      font-size .48rem
      font-weight 500
      font-family "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif
      text-align center
      a
        color #a3c9d9
    .right
      flex  1
      .logBox
        float right
        margin-right .2rem
        button
          color #f9f9f9
          background-color rgba(202, 202, 202, 0.4)
          &:hover
            background-color rgba(202, 202, 202, 0.6)
            color #ffffff
        button
          margin-right .2rem
      .logInfo
        float right
        &:after
          content ''
          display block
          clear both
        li
          float left
          margin 0 .2rem
          min-width 1.8rem
          a
            display block
            color #35645c
            text-align center
            &:hover
              color #22453D
              background-color rgba(255, 255, 255, 0.3)
</style>
