<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>个人信息管理</el-breadcrumb-item>
      <el-breadcrumb-item>修改密码</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- <el-form label-width="80px" >
      <el-form-item label="旧密码">
        <el-input ></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="重复密码">
        <el-input ></el-input>
      </el-form-item>
    </el-form>
     <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addAdmin">确 定</el-button>
    </span>-->
    <el-form :model="PassForm" :rules="Formrules" ref="ruleFormRef">
      <el-form-item label="旧密码" prop="oldPass">
        <el-input type="password" v-model="PassForm.oldPass"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPass">
        <el-input type="password" v-model="PassForm.newPass"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="PassForm.checkPass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updatePass">提交</el-button>
        <el-button @click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  data () {
    let checkPass = (rules, value, cb) => {
    //   let regAcount = /^A/
      let oldPass = sessionStorage.getItem('password')
      if (oldPass !== this.PassForm.oldPass) {
        return cb(new Error('请输入正确的密码'))
      }
      if (this.PassForm.newPass !== this.PassForm.checkPass) {
        return cb(new Error('两次密码不一致'))
      }
    }
    return {
      Formrules: {
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' },
          {validator: checkPass, trigger: 'blur'}
        ]
      },

      // 修改用户密码
      PassForm: {
        oldPass: '',
        newPass: '',
        checkPass: ''
      }
    }
  },
  created () {
  },
  methods: {
    // 修改教师数据
    editAdminInfo(Acount) {
      axios.get('/api/updatePass', {
        params: {
          Acount: sessionStorage.getItem('Acount'),
          password: this.PassForm.checkPass
        }
      })
        .then(res => {
          if (res.data.state === 1) {
            console.log('修改密码成功')
            return this.$message.success('修改成功')
            // this.editForm = res.data.selectAdminInfo.RowDataPacket
          } else {
            return this.$message.error('修改失败')
          }
        })
    },
    // 重置方法
    handleReset () {
      console.log('125')
      if (this.$refs.PassForm !== undefined) {
        this.$refs.PassForm.resetFields()
      }
    },

    // 更新密码
    updatePass() {
      this.$refs.ruleFormRef.validate(async valid => {
        console.log(valid)
        if (!valid) return false
        axios.get('/api/Adminupdatepass', {
          params: {
            Acount: sessionStorage.getItem('Acount'),
            password: this.PassForm.checkPass,
            query: this.queryInfo
          }
        })
          .then(res => {
            if (res.data.state === 1) {
              console.log(res)
            } else {
              return false
            }
          })
      })
    }
  }
}
</script>

<style scoped>
.el-form-item {
    width: 30%
}
.el-form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
}
</style>
