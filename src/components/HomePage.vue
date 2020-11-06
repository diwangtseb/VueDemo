<template>
  <div>
    <h3 style="width: 200px; margin: auto">欢迎来到德莱联盟主页</h3>
    <div class="block">
      <el-carousel height="600px">
        <el-carousel-item v-for="item in images" :key="item">
          <h3 class="small">
            <img :src="item" alt="picture" style="height: 600px; width: 100%" />
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-upload
      class="upload-demo"
      action="http://127.0.0.1:5000/Upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
    <div style="width:150px;margin:auto">
      <span>
        <el-button type="primary" @click='Goshop'>开始奇妙之路吧</el-button>
      </span>      
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require("../assets/Images/1.jpg"),
        require("../assets/Images/2.jpg"),
        require("../assets/Images/3.jpg"),
        require("../assets/Images/4.jpg"),
      ],
      fileList: []
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    Goshop(){
      console.log(this.$router)
      this.$router.push({name:"Shop"})
    }
  },
};
</script>

<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>