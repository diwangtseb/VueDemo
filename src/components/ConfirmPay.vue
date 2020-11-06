<template>
  <div>
    <el-button @click="ShowQRCode" v-show="!show"
      >点击按钮扫一扫二维码支付</el-button
    >
    <div id="qrcode" v-show="show" @click="skip"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    ShowQRCode() {
      this.show = !this.show;
      document.getElementById("qrcode").innerHTML = "";
      let val = this.$store.state.payMoney;
      this.qrcode = this.$QRCode(
        "您需要支付的价格是：" + this.$store.state.payMoney
      );
    },
    skip() {        
        this.$router.push('/Bmi')
    },
  },
};
</script>

<style lang="scss" scoped>
</style>