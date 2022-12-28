<template>
  <div>
    <el-container class="mianContainer">
      <el-aside width="200px">
        <Sidebar />
      </el-aside>

      <el-container>
        <el-header>
          <span class="title">面包屑</span>
          <div class="userInfo">用户信息</div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  data() {
    return {};
  },
  components: {
    Sidebar,
  },
};
</script>
<style lang="less" scoped>
.mianContainer {
  height: 100vh;
  .el-header {
    background-color: #ffffff;  
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e1e1e1;
  }
  // .title {
  //   color: #fff;
  // }
  // .userInfo {
  //   color: #fff;
  // }
}
</style>