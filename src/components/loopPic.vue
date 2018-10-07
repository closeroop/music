<template>
    <div class="loop">
      <transition-group name="pic" tag="ul">
        <li v-for="(item , index) in picList" :key="index" class="list-item" v-show="index===currentIndex">
           <a :href="item.link" :style="{ 'background-image':'url('+item.src+')'}"></a>
        </li>
      </transition-group>
      <div class="link-list" @mouseleave="autoLoop">
        <ul >
          <li v-for="(item,index) in picList" :key="index" @mouseenter="showIndex(index)">
            <a :href="item.link">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
    export default{
        props:{},
         data(){
           return {
              picList:[{src:'/static/img/login-4.jpg',link:'#',title:'第一封信'},
                       {src:'/static/img/login-3.jpg',link:'#',title:'第二封信'},
                       {src:'/static/img/pic-4.jpg',link:'#',title:'第三封信'}],
              currentIndex:2,
             timeInterval:null
           }
         },
      methods:{
        showIndex(index){
             //右侧导航栏
          this.currentIndex=index;
          clearInterval(this.timeInterval);
        },
        autoLoop(){
          this.timeInterval=setInterval(()=>{
             this.currentIndex++;
             if(this.currentIndex>2) this.currentIndex=0;
          },5000)
        }
      },
      mounted(){
           this.autoLoop();
      }
   }
</script>
<style scoped>
   .loop{
     width: 100%;height: 300px;overflow: hidden;position: relative;
   }
   ul:after{
      content: '';
      display: block;
      clear: both;
   }
   .loop>ul{
     position: relative;
   }
   .loop>ul li{
    list-style-type: none;height: 300px;width: 100%;position: absolute;top: 0; left: 0;
  }
   ul li>a{
     display: block;background-repeat: no-repeat;//background-image: url("../assets/login-3.jpg");
     background-size: cover; background-position: center;
     height: 100%;
   }
   .link-list{
     position: absolute;top: 20px;right: 100px;
     background: rgba(0, 0, 0, 0.4);width: 180px;height: 260px;
   }
   .link-list li{
     list-style-type: none;height: 86px;line-height: 86px;text-align: center;

   }
   .link-list li a{
     color: aliceblue;background:none;
   }
   .link-list li a:hover{
     background: rgba(0, 0, 0, 0.4);
   }
   .pic-enter-active {
     transition: all 1.2s;
   }
   .pic-leave-active{
     transition: all 1.2s;
   }
   .pic-leave-to{
     //opacity: 0;
     transform: translateY(-300px);
   }
   .pic-enter{
     //opacity: 0;
     transform: translateY(300px);
   }
</style>
