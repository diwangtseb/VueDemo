<template>
  <div>
    <div style="display: flex; align-items: center; flex-flow: column">
      <h3>欢迎来到心动环节</h3>
      <el-button @click="show = !show" style="color: red">点我有惊喜</el-button>
      <div style="display: flex; margin-top: 20px; height: 100px">
        <transition name="el-fade-in-linear">
          <div v-show="show" class="transition-box">
            奖励你一套三年高考五年模拟
          </div>
        </transition>
      </div>
    </div>
    <div id="MongoData">
      <el-table
        ref="multipleTable"
        :data="books"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="name" label="书名" width="120">
        </el-table-column>
        <el-table-column prop="price" label="价格" width="120">
        </el-table-column>
        <el-table-column
          prop="repertory"
          label="剩余数量"
          show-overflow-tooltip
        >
        </el-table-column>
      </el-table>
      <el-button @click="confirmBuy">确认购买</el-button>
      <el-button @click="ShowQRCode">二维码</el-button>
      <div id="qrcode" v-show="show"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      books: [],
      multipleSelection: [],
    };
  },
  methods: {
    getBooks() {
      this.$http.get("/Goods").then((res) => {
        this.books = res.data;
      });
    },
    handleSelectionChange(val) {
      console.log(val);
      this.multipleSelection = val;
    },
    confirmBuy() {
      let sumPrice = 0;
      this.multipleSelection.forEach((item) => {
        sumPrice += item.price;
      });
      this.$router.push('ConfirmPay')
    },
    ShowQRCode() {
      this.show = !this.show;
      document.getElementById("qrcode").innerHTML = "";
      this.qrcode = this.$QRCode("奖励你一套五十年高考三十年模拟");
    },
  },
  created() {
    this.getBooks();
  },
};
</script>

<style lang="scss" scoped>
.transition-box {
  margin-bottom: 10px;
  width: 300px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 10px;
  box-sizing: border-box;
  //margin-right: 20px;
  margin: 0 auto;
}
</style>