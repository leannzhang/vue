
<template>
  <div class="login_container">
    <div class="login_box">
      <!--头像区域-->
      <div class="avatar_box">
        <img src="../assets/images/login/timg.png" />
      </div>
      <!--登录表单区域-->
      <el-form
        label-width="0px"
        class="FormLogin"
        :model="LoginForm"
        :rules="LoginFormRules"
        ref="LoginFormRef"
      >
        <!--登录-->
        <el-form-item prop="Acount">
          <el-input v-model="LoginForm.Acount" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <!--密码-->
        <el-form-item prop="Password">
          <el-input v-model="LoginForm.Password" prefix-icon="iconfont icon-mima" type="password"></el-input>
        </el-form-item>
        <!--按钮区域-->
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="danger" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// import '../plugins/elements.js'

import axios from 'axios'
export default {
  // name: '',
  data () {
    return {
      // 这是登录表单的数据绑定对象
      LoginForm: {
        Acount: 'Azly',
        Password: '123456'
        // Acount: 'admin',
        // Password: '123456'

      },
      // 这是表单的验证规则对象
      LoginFormRules: {
        // 验证用户名是否合法
        Acount: [
          { required: true, message: '请输入登录账号', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        Password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    // 点击重置按钮，清空表单数据
    resetLoginForm () {
      console.log('resetLoginForm')
      this.$refs.LoginFormRef.resetFields()
    },
    // login () {
    //   this.$refs.LoginFormRef.validate(async vaild => {
    //     if (!vaild) return
    //     const {data: res} = await this.$http.post('login', this.LoginForm)
    //     if (res.meta.status !== 200) {
    //       return this.$message.error('登录失败')
    //     }
    //     this.$message.success('登录成功')
    //     /*
    //       1 将登录成功之后的token，保存到客户端的sessionStorage中
    //         1.1 项目中出了登录之外的其他API接口，必须在登录之后才能访问
    //         1.2 token只应在当前网站打开期间生效，所以将token保存在sessionStorage中
    //     */
    //     // console.log('登录成功')
    //     console.log(res)
    //     window.sessionStorage.setItem('token', res.data.token)
    //     // 2 通过编程式导航跳转到后台主页，路由地址是 /home
    //     this.$router.push('/home')
    //     // console.log(vaild)
    //   })
    // }
    login () {
      this.$refs.LoginFormRef.validate((valid) => {
        if (valid) {
          // alert('submit!')
          axios.get('/api/login', {
            params: {
              Acount: this.LoginForm.Acount,
              Password: this.LoginForm.Password
            }
          })
            .then(res => {
              // console.log('登录then')
              // console.log(this)
              if (res.data.state === 1) {
                this.$message.success('登录成功')
                sessionStorage.setItem('Acount', this.LoginForm.Acount)
                sessionStorage.setItem('password', this.LoginForm.password)
                this.$router.push({path: '/home'})
              } else {
                this.$message.error('登录失败')
                return false
              }
            })
        }
      })
    }
  }
}

</script>

<style  scoped>
.login_container{
  /* background-color: #2b4b6b; */
  background-image: url(../assets/images/login/bg1.jpg);
  height: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login_box{
  width: 450px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 3px;
  position: relative;
}
.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #ffffff;
}
.avatar_box  img {
   width: 130px;
   height: 130px;
   border-radius: 50%;
   background-color: #eee;
}
.FormLogin{
  position: absolute;
  bottom: 0;
  width: 100%;
  padding:0 20px;
  box-sizing: border-box;

}

</style>
