<template>
  <Modal v-model="modal"  :loading="loading" @on-ok="asyncOK" class="loginBox">
    <p slot="header" style="color:#ff9900;text-align:center;font-size: 24px">
      <Icon type="md-cloudy" />
      <span>登录</span>
    </p>
    <Input  v-model="account" placeholder="账号/邮箱"  class="inputBox" autofocus/>
    <Input  v-model="password" placeholder="密码" type="password" class="inputBox"/>
    <div slot="footer">
      <Button  type="warning" ghost  @click="esc">取消</Button>
      <Button type="primary" :loading="modal_loading" @click="login">登录</Button>
    </div>
  </Modal>
</template>
<script>
  export default {
    data () {
      return {
        modal:this.showBox,
        loading: true,
        modal_loading:false,
        password:'',
        account:'',
      }
    },
    props:['showBox'],
    watch:{
      'showBox':function (newVal) {
         this.modal=newVal;
      },
      'modal':function (news) {
          if(news===false){
            this.esc();
          }
      }
    },
    methods: {
      asyncOK () {
        setTimeout(() => {
          this.modal_loading=false;
          this.modal = false;
        }, 2000);
      },
      login(){
        this.modal_loading=true;
        this.asyncOK()
      },
      esc(){
        this.$emit('upState')
      }
    }
  }
</script>
<style>
  .loginBox {
  }
  .loginBox .ivu-modal{
    width: 400px !important;margin-top: 8%;
  }
  .inputBox{
    margin:10px 0 ;
  }
  .inputBox input{
    height: 38px;
  }
  .loginBox .ivu-modal-footer{
     border: none;
  }
  .loginBox .ivu-modal-header{
     border: none;
     padding-top: 30px;
  }
  .loginBox .ivu-modal-body{
    padding: 20px 25px 10px;
  }
  .loginBox .ivu-modal-header p{
    height: auto;
  }
  .loginBox .ivu-modal-mask{
     /* background: url("/static/img/cat.gif") center no-repeat;
      background-size:100% ;*/
  }
</style>
