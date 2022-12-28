<template>
  <el-menu
    default-active="home"
    class="el-menu-vertical-demo"
    :collapse="false"
    background-color="#1e2e3d"
    text-color="#e1e1e1"
    active-text-color="#1B6FC6"
    :router="true"
  >
    <h3>白家农产品C1区系统</h3>
    <el-menu-item
      v-for="item in hasNoChild"
      :key="item.name"
      :index="item.path + ''"
    >
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu
      :index="item.path + ''"
      v-for="item in hasChild"
      :key="item.name"
    >
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item
        :index="subItem.path + ''"
        v-for="subItem in item.children"
        :key="subItem.path"
        >{{ subItem.label }}</el-menu-item
      >
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      menuData: [
        {
          path: "/home",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mail",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/pageOne",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/pageTwo",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {},
  computed: {
    // 计算属性有子菜单的
    hasChild() {
      return this.menuData.filter((item) => item.children);
    },
    //没有子菜单的
    hasNoChild() {
      return this.menuData.filter((item) => !item.children);
    },
  },
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  h3 {
    margin: 0;
    padding: 0;
    color: white;
    font-size: 16px;
    text-align: center;
    line-height: 48px;
  }
}
.el-menu {
  border: none;
  height: 100%;
}
</style>