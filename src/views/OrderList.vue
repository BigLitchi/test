<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="oid" label="订单ID" width="50">
      </el-table-column>
      <el-table-column prop="pid" label="商品ID" width="48"> </el-table-column>
      <el-table-column prop="pname" label="商品名" width="120"> </el-table-column>
      <el-table-column prop="buyerid" label="购买者" width="70"> </el-table-column>
      <el-table-column prop="salerid" label="售卖者" width="70"> </el-table-column>
      <el-table-column prop="recename" label="收货人" width="70"> </el-table-column>
      <el-table-column prop="tel" label="收货电话" width="115"> </el-table-column>
      <el-table-column prop="receadre" label="收货地址" width="200"> </el-table-column>
      <el-table-column prop="state" label="状态" width="70"> </el-table-column>
      <el-table-column prop="transportid" label="物流订单号" width="135"> </el-table-column>
      <el-table-column prop="orderdate" label="下单日期" width="160"> </el-table-column>
      <el-table-column prop="allprice" label="价钱" width="70"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
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
        .get("http://localhost:8089/orderDeleteById/" + row.oid)
        .then((resp) => {
          _this.$alert("《" + row.oid + "》删除成功", "消息", {
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
        .get("http://localhost:8089/orderListPage/" + currentPage + "/5")
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
    axios.get("http://localhost:8089/orderListPage/1/5").then((resp) => {
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