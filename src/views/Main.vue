<template>
  <div id="Main">
    <!-- <div>
      <router-link to="/one">one</router-link> |
      <router-link to="/about">about</router-link> |
      <router-link to="/two">two</router-link>
    </div>
     <router-view/> -->
    <el-container style="height: 650px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="[]" router>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">用户管理</template>
              <el-menu-item index="/one">用户列表</el-menu-item>
              <el-menu-item index="/two">添加用户</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="商品管理">
              <el-menu-item index="/Product">商品页面</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="订单管理">
              <el-menu-item index="/OrderList">订单页面</el-menu-item>
            </el-menu-item-group>
            
          </el-submenu>

        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>HQH</span>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: "Main",
  
   data() {
      const item = {
        date: '2016-05-02',
        name: 'HQH',
        address: 'DEV1CE '
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
};
</script>

<style>
#Main {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
