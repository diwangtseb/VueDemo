<template>
  <div id="usr">
    <div>
      <span>
        <h3 style="width: 100%; text-align: center">欢迎登录德莱联盟</h3>
      </span>
      <el-input name="1" v-model="User.username" placeholder="请输入用户名">
      </el-input>
    </div>
    <el-input
      placeholder="请输入密码"
      v-model="User.password"
      show-password
    ></el-input>
    <el-button style="width: 100%; color: red" @click="handleLogin"
      >登录</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      User: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    handleLogin() {
      this.$http({
        url: '/Login',
        method: 'POST',
        data:this.User
      }).then(res=>{
          //this.$store.commit('UpdateLoginState',true)   
          sessionStorage.setItem("isLogin",true)
          this.$router.push('/HomePage')
      })
    },
  },
};
</script>

<style scoped>
#usr {
  width: 20%;
  margin: 0 auto;
}
</style>