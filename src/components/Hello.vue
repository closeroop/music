<template>
    <div>
      <h1>{{test}}</h1>
      <vue-one :dates="test"></vue-one>
      <button @click="change">change</button>
      <router-view></router-view>
      <p @click="jump" >长沙</p>
    </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '哈哈',
      test:'纳里'
    }
  },
  methods:{
     change(){
       this.test="阿鲁哈";
     },
     jump(){
       this.$router.push({path:'/'});
     }
  },
  components:{
    "vue-one":{
       template:`<span>{{msg}}</span>`,
       props:['dates'],
       data(){
         return{
            msg:this.dates
         }
      },
      watch:{
         'dates': function(val){
             this.msg=val;
         }
      }
    }
  },
  beforeRouteEnter(to,from,next){
    console.log(to.path); next(vm=>{

    });
  }
}
</script>
