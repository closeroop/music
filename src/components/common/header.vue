<template>
  <div class="swapper">
  <Row class="header">
    <Col span="4" class="logo">
          <span style="font-size: 20px;color: #ff9900">C</span>loseroop
    </Col>
    <Col span="8" class="">
       <Input search placeholder="Search something..." class="search"/>
    </Col>
    <Col span="9" class="">
      <Row :gutter="16" class="nav">
        <Col span="6">
           <Icon type="ios-videocam" /> 视频
           <div class="underline"></div>
        </Col>
        <Col span="6">
           <Icon type="md-photos" />图画
           <div class="underline"></div>
        </Col>
        <router-link to="/music">
          <Col span="6">
              <Icon type="ios-musical-note" />音乐
              <div class="underline"></div>
          </Col>
        </router-link>
        <Col span="6">
           <Icon type="md-planet" />小C放映室
        <div class="underline"></div>
        </Col>
      </Row>
    </Col>
    <Col span="3" class="loginGroup" >
      <Dropdown  v-if="11<2">
        <img src="../../assets/tou-3.jpg" alt="" class="user-head">
        <DropdownMenu slot="list" class="menu-list">
          <DropdownItem>个人中心</DropdownItem>
          <DropdownItem>信息设置</DropdownItem>
          <DropdownItem >我的消息</DropdownItem>
          <DropdownItem>资助</DropdownItem>
          <DropdownItem divided>退出登录</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <template v-if="11>2">
        <Button type="warning" ghost >注册</Button>
        <Button type="info" @click="showLoginBox">登录</Button>
      </template>
    </Col>
  </Row>
  <login-box :showBox="showBox" @upState="upShowBox"></login-box>
  </div>
</template>
<script>
  import loginBox from './loginBox.vue'
  export default {
    data () {
      return {
        theme1: 'light',
        showBox:false
      }
    },
    methods:{
      showLoginBox(){
         this.showBox=true;
      },
      upShowBox(){
        this.showBox=false;
      }
    },
    components:{
       loginBox
    },
  }
</script>
<style scoped>
  .swapper {
    overflow: hidden;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
  }
  .loginGroup{
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loginGroup button{
     margin: 0 5px;
  }
  .loginGroup .user-head{
    height: 40px;
    width:40px;
    border-radius:50% ;
    vertical-align: middle;
  }
  .header{
    //box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    padding: 0 150px;height: 50px;line-height: 50px;
  }
  .search{
    max-width: 450px;width:calc(100% - 50px)
  }
  .search input{
    border: transparent;
    border-bottom: 1px solid rgba(43, 133, 228, 0.5 );
    border-radius: 0;height: 30px;
    background-color: transparent;
  }
  .search input:focus{
    box-shadow: none ; border-bottom: 1px solid #236cba;
  }
  .search input:hover{
     border-bottom: 1px solid #236cba;
  }
  .nav{
    font-size: 14px;text-align: center;color: #515a6e;line-height: 48px;
  }
  .nav>div{
    height: 48px;
  }
  .nav div:hover{
     cursor: pointer;
  }
  .nav div:hover .underline{
    height: 2px;transition: all .5s;
  }
  .logo{
    font-size: 18px;text-align: center;color: #6bd6ae;
  }
  .underline{
    background-color: #5cadff;width: 100%;transition: all .5s;
  }
  .menu-list li{
    width: 120px;
    height: 35px;text-align: center;
  }
  @media (max-width:1380px) {
    .header{
      padding: 0 50px;
    }
  }
</style>
