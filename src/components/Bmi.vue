<template>
  <div>
    <div id="center">
      <h3>欢迎来到BMi主页</h3>
      <el-input placeholder="体重KG" v-model="weight"></el-input>
      <el-input placeholder="身高1.x米" v-model="height"></el-input>
      <h4>您的Bmi是：{{ isNaN(comBmi)?"":comBmi.toString() }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weight: "",
      height: "",
    };
  },
  computed: {
    comBmi() {
      console.log(parseFloat(this.weight));
      let Bmi =
        parseFloat(this.weight) /
        (parseFloat(this.height) * parseFloat(this.height));
      return Bmi;
    },
  },
};
</script>

<style lang="scss" scoped>
#center {
  line-height: 200px; /*垂直居中关键*/
  text-align: center;
  height: 200px;
  font-size: 36px;
  background-color: #ccc;
}
</style>