<!--  -->
<template>
  <div>
    <h1>ProductUpdate</h1>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="pid" prop="pid">
        <el-input v-model="ruleForm.pid" readonly="true"></el-input>
      </el-form-item>

      <el-form-item label="商品名" prop="pname">
        <el-input v-model="ruleForm.pname"></el-input>
      </el-form-item>

      <el-form-item label="分类id" prop="cid2">
        <el-input v-model="ruleForm.cid2"></el-input>
      </el-form-item>

      <el-form-item label="状态id" prop="state">
        <el-input v-model="ruleForm.state"></el-input>
      </el-form-item>

      <el-form-item>
        <!-- ruleForm指ref的值 -->
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交更改</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置表单</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "ProductUpdate",
  methods: {
    submitForm(formName) {
      const _this = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //传数据到后端的接口
          axios
            .put("http://localhost:8089/productUpdateById", this.ruleForm)
            .then((resp) => {
              if (resp.data.success == true) {
                _this.$alert(
                  "《" + _this.ruleForm.pname + "》修改成功",
                  "消息",{
                    confirmButtonText: "确定",
                    callback: (action) => {
                      _this.$router.push("/Product");
                    },
                  }
                );
              }

              console.log(resp);
              this.$message("添加成功");
            });

          console.log(this.ruleForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //重置表单的方法
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.$message("重置成功");
    },
  },
  data() {
    return {
      ruleForm: {
        name: "",
        pwd: "",
      },
      rules: {
        name: [{ required: true, message: "请输入名字", trigger: "blur" }],
        pwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },

  created() {
    const _this = this;
    console.log(this.$route.query.id);
    axios
      .get("http://localhost:8089/findProductById/" + this.$route.query.id)
      .then((resp) => {
        this.ruleForm = resp.data;
        console.log(resp);
      });
  },
};
</script>

<style  scoped>
</style>
