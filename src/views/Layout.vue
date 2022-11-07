<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <Sidebar />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
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
<style>
</style>