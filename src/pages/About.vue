<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu router default-active="2" class="el-menu-vertical-demo">
          <router-link to="/">
            <el-menu-item>
              <i class="el-icon-location"></i>
              <span slot="title">首页</span>
            </el-menu-item>
          </router-link>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>菜单1</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">菜单1</el-menu-item>
              <el-menu-item index="2-2">菜单2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>菜单2</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">菜单1</el-menu-item>
              <el-menu-item index="3-2">菜单2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span>菜单3</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">菜单1</el-menu-item>
              <el-menu-item index="4-2">菜单2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>菜单4</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">菜单1</el-menu-item>
              <el-menu-item index="5-2">菜单2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 头部信息 -->
        <el-header>
          <h2>后台管理</h2>
        </el-header>
        <!-- 中间内容 -->
        <el-main>
          中间内容
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.el-header,
.el-footer {
  text-align: center;
  line-height: 60px;
}

.el-aside {
  text-align: left;
  line-height: 200px;
}

.el-main {
  text-align: center;
  line-height: 200px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
