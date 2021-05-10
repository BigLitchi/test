<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="pid" label="pid" width="100">
      </el-table-column>
      <el-table-column prop="pname" label="商品名" width="120"> </el-table-column>
      <el-table-column prop="descibe" label="描述" width="480"> </el-table-column>
      <el-table-column prop="salerid" label="售卖者" width="70"> </el-table-column>
      <el-table-column prop="price" label="价格" width="70"> </el-table-column>
      <el-table-column prop="oldprice" label="原价" width="70"> </el-table-column>
      <el-table-column prop="cid2" label="分类id" width="70"> </el-table-column>
      <el-table-column prop="state" label="状态id" width="70"> </el-table-column>
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
        path: "/ProductUpdate",
        query: {
          id: row.pid,
        },
      });
    },

    deletedata(row) {
      const _this = this;
      axios
        .get("http://localhost:8089/pdb/" + row.pid)
        .then((resp) => {
          _this.$alert("《" + row.pname + "》删除成功", "消息", {
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
        .get("http://localhost:8089/productPage/" + currentPage + "/5")
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
    axios.get("http://localhost:8089/productPage/1/5").then((resp) => {
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