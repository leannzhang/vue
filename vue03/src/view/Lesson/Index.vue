<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>课程信息管理</el-breadcrumb-item>
      <el-breadcrumb-item>课程信息</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card :gutter="20">
      <el-row>
        <el-col :span="8">
          <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable>
            <el-button slot="append" icon="el-icon-search" @click="getTeacherList"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addDialogVisible = true">添加课程</el-button>
        </el-col>
      </el-row>
    </el-card>

    <!--管理员列表区域-->
    <el-table
      border
      style="width: 100%"
      :data="LessonInfo.slice((queryInfo.pagenum-1)*queryInfo.pagesize,queryInfo.pagenum*queryInfo.pagesize)"
      stripe
    >
      <el-table-column label="序号" type="index"></el-table-column>
      <el-table-column prop="CourseID" label="课程ID"></el-table-column>
      <el-table-column prop="courseName" label="课程名称"></el-table-column>
      <el-table-column prop="courseTeacher" label="课程教师ID"></el-table-column>
      <!-- <el-table-column prop="name" label="年龄" ></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>-->
      <el-table-column prop="courseDate" label="课程时间"></el-table-column>
      <el-table-column label="操作">
        <!-- <template> -->
        <template slot-scope="scope">
          <!--编辑按钮-->
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="mini"
            @click="showEditDialog(scope.row.Acount)"
          ></el-button>
          <!--删除按钮-->
          <el-button type="danger" icon="el-icon-delete" size="mini" @click='removeLesson(scope.row.Acount)'></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--分页区域-->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-sizes="[1, 5, 10, 20]"
      :page-size="queryInfo.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>

    <!--添加用户的对话框-->
    <el-dialog
      title="提示"
      :visible.sync="addDialogVisible"
      width="50%"
      @close="handleReset(addForm)"
    >
      <!--内容主体部分-->
      <el-form :model="addForm" :rules="Formrules" ref="addruleFormRef" label-width="70px">
        <el-form-item label="账号" prop="Acount">
          <el-input v-model="addForm.Acount"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="username">
          <el-input v-model="addForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="addForm.password"></el-input>
        </el-form-item>
      </el-form>
      <!--内容底部部分-->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addTeacher">确 定</el-button>
      </span>
    </el-dialog>

    <!--修改用户的对话框-->
    <el-dialog
      title="修改教师信息"
      :visible.sync="editDialogVisible"
      width="50%"
      @close="handleReset(editForm)"
    >
      <!--内容主体部分-->
      <el-form :model="editForm" :rules="Formrules" ref="addruleFormRef" label-width="70px">
        <el-form-item label="账号">
          <el-input v-model="editForm.Acount" disabled></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="username">
          <el-input v-model="editForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="editForm.password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editLessonInfo">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  data () {
    let checkAcount = (rules, value, cb) => {
      let regAcount = /^L/

      if (regAcount.test(value)) {
        return cb()
      }
      cb(new Error('请输入以L开始的课程'))
    }
    return {
      // 获取用户列表的参数对象
      queryInfo: {
        query: '',
        // 当前页数
        pagenum: 1,
        // 当前显示几条数据
        pagesize: 5
      },
      // 管理员列表
      LessonInfo: [],
      total: 0,
      addDialogVisible: false,
      addForm: {
        Acount: 'T1234',
        username: '向不凡',
        password: '123123'
      },
      Formrules: {
        Acount: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
          {validator: checkAcount, trigger: 'blur'}
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      },
      // 控制修改用户对话框的显示与隐藏
      editDialogVisible: false,
      // 修改表单数据
      editForm: {}
    }
  },
  created () {
    this.getTeacherList()
  },
  computed: {
  },
  watch: {
  },
  methods: {
    getTeacherList () {
      axios.get('/api/LessonInfo', {
        params: {
          Acount: sessionStorage.getItem('Acount'),
          query: this.queryInfo
        }
      })
        .then(res => {
          if (res.data.state === 1) {
            console.log(res)
            this.LessonInfo = res.data.LessonInfo
            this.total = this.LessonInfo.length
          } else {
            return false
          }
        })
    // this.$router.push('/PersonInfo')
    },
    // 监听pagesize改变事件
    handleSizeChange (newSize) {
      console.log(newSize)
      this.queryInfo.pagesize = newSize
      this.getTeacherList()
    },
    // 监听 页码值 改变事件
    handleCurrentChange (newPage) {
      console.log(newPage)
      this.queryInfo.pagenum = newPage
      this.getTeacherList()
    },

    // 监听添加用户对话框的关闭事件
    handleReset (formName) {
      if (this.$refs[formName] !== undefined) {
        this.$refs[formName].resetFields()
      }
    },
    // 点击按钮，添加教师
    addTeacher () {
      this.$refs.addruleFormRef.validate(async valid => {
        console.log(valid)
        if (!valid) return false
        // 预验证通过，进行添加请求
        axios.get('/api/addTeacher', {
          params: {
            /* Teacher: this.addForm  */
            Acount: this.addForm.Acount,
            username: this.addForm.username,
            password: this.addForm.password
          }
        })
        // 添加成功后，隐藏添加教师的对话框
        this.addDialogVisible = false
        // 重新获取教师列表
        this.getTeacherList()
      })
    },

    selectTeacher(Acount) {
      axios.get('/api/selectTeacher', {
        params: {
          Acount: Acount
        }
      })
        .then(res => {
          if (res.data.state === 1) {
            console.log(res.data.selectLessonInfo)
            this.editForm = res.data.selectLessonInfo[0]
            // this.editForm = res.data.selectLessonInfo.RowDataPacket
          } else {
            return false
          }
        })
    },

    // 修改教师数据
    editLessonInfo(Acount) {
      axios.get('/api/editLessonInfo', {
        params: {
          Acount: this.editForm.Acount,
          username: this.editForm.username,
          password: this.editForm.password
        }
      })
        .then(res => {
          if (res.data.state === 1) {
            console.log('修改数据成功')
            return this.$message.success('修改成功')
            // this.editForm = res.data.selectLessonInfo.RowDataPacket
          } else {
            return this.$message.error('修改失败')
          }
        })

        //  关闭对话框
      this.editDialogVisible = false

      // 更新数据
      this.getTeacherList()
    },

    // 展示编辑的对话框
    showEditDialog (Acount) {
      this.selectTeacher(Acount)
      this.editDialogVisible = true
    },

    // 修改教师数据并提交
    editTeacher () {
      this.$ref.editFormRef.validate(valid => {
        if (!valid) return
        // 发起修改教师信息的数据请求
        this.editLessonInfo()
        console.log('editLessonInfo')
      })
    },

    // 删除教师
    deleteTeacher (Acount) {
      axios.get('/api/deleteTeacher', {
        params: {
          Acount
        }
      })
        .then(res => {
          if (res.data.state === 1) {
            console.log('删除数据成功')
            // return this.$message.success('删除成功')
            // this.editForm = res.data.selectLessonInfo.RowDataPacket
          } else {
            return this.$message.error('删除失败')
          }
        })
    },

    // 删除教师数据
    async removeLesson(Acount) {
      // 弹框询问用户是否删除数据
      console.log(Acount)
      const confirmResult = await this.$confirm('此操作将永久删除该教师, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteTeacher(Acount)
        this.getTeacherList()
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
      console.log(confirmResult)
    }
  }
}
</script>

<style scoped>

</style>
