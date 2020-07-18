<template>
  <el-row style="background-color: #11edff">
    <el-col :span="6" style="text-align: left"><img src="../../../assets/myLogo.png" alt="简单进销存"></el-col>
    <el-col :span="12">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
               background-color="#11edff"
               style="padding-left: 15%"
               text-color="#000">
        <el-menu-item index="1">商品信息</el-menu-item>
        <el-submenu index="2">
          <template slot="title">物价管理</template>
          <el-menu-item index="2-1">调进货价</el-menu-item>
          <el-menu-item index="2-2">调零售价</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">进销管理</template>
          <el-menu-item index="3-1">销售单</el-menu-item>
          <el-menu-item index="3-2">进货单</el-menu-item>
          <el-menu-item index="3-3">报损单</el-menu-item>
          <el-menu-item index="3-4">退货单</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">报表管理</template>
          <el-menu-item index="4-1">销售报表</el-menu-item>
          <el-menu-item index="4-2">库存报表</el-menu-item>
          <el-menu-item index="4-3">进货报表</el-menu-item>
          <el-menu-item index="4-4">报损报表</el-menu-item>
        </el-submenu>
        <el-menu-item index="5" disabled>消息管理</el-menu-item>
        <el-menu-item index="6">用户中心</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="6" style="text-align: right">
      <p style="padding-right: 10%"><a href="javascript:">user<i class="el-icon-user"></i></a></p>
    </el-col>
  </el-row>
</template>

<script>
    export default {
      name: "NavTop",
      data() {
        return {
          //导航栏默认选择项
          activeIndex: '1',
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>
  a{text-decoration: none;color: #000000}
</style>

<style>
  .el-menu-item,.el-submenu__title{
    font-weight: 700;
  }
</style>
