<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="uid" label="UID" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="pwd" label="密码" width="120"> </el-table-column>

      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="editdata(scope.row)" type="text" size="small"
            >修改</el-button
          >
          <el-button @click="deletedata(scope.row)" type="text" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next"
      page-size="5"
      :total="100"
      @current-change="page"
    >
    </el-pagination>
  </div>
</template>



<script>
export default {
  name: "One",

  methods: {
    //点修改跳转到update页面，并传递当前这条记录的数据
    editdata(row) {
      console.log(row);
      this.$router.push({
        path: "/UserUpdate",
        query: {
          id: row.uid,
        },
      });
    },

    deletedata(row) {
      const _this = this;
      axios
        .get("http://localhost:8089/userDeleteById/" + row.uid)
        .then((resp) => {
          _this.$alert("《" + row.name + "》删除成功", "消息", {
            confirmButtonText: "确定",
            callback: (action) => {
              window.location.reload();
            },
          });
        });
    },
    // handleCurrentChange: function (currentPage) {
    //   this.currentPage = currentPage;
    //   console.log(this.currentPage); // 点击第几页
    // }
    page(currentPage) {
      axios
        .get("http://localhost:8089/page/" + currentPage + "/5")
        .then((resp) => {
          console.log(resp);
          this.tableData = resp.data;
        });
    },
  },
  created() {
    //普通写法
    // const _this = this;
    // axios.get('http://localhost:8089/queryall').then(function(resp){
    //   console.log(resp);
    //   _this.tableData = resp.data
    // })

    //带箭头函数写法
    axios.get("http://localhost:8089/page/1/5").then((resp) => {
      console.log(resp);
      this.tableData = resp.data;
    });
  },

  data() {
    return {
      tableData: null,
    };
  },
};
</script>

<style scoped>
</style>