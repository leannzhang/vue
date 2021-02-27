<template>
  <el-container class="home-container">
    <!--头部区域-->
    <el-header>
      <div>
        <img src="../assets/images/login/timg.png" alt="logo图片" />
        <span>学生成绩管理系统</span>
      </div>
      <span>管理员</span>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!--页面主体区域-->
    <el-container>
      <!--侧边栏-->
      <el-aside :width="Iscollapse?'64px':'200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!--侧边栏菜单区域-->
        <el-menu
          background-color="#a6e3e9"
          text-color="#000"
          active-text-color="red"
          unique-opened
          :collapse="Iscollapse"
          :collapse-transition="false"
          router
          :default-active='activePath'
        >
          <!--一级菜单-->
          <el-submenu :index="item.id+''" v-for="item in menulist" :key="item.id">
            <!--一级菜单的模板区域-->
            <template slot="title">
              <!--图标-->
              <el-tooltip :content="item.title" placement="top" :enterable='false'>
                <i :class="iconObj[item.id]"></i>
              </el-tooltip>
              <!-- <i :class="iconObj[item.id]"></i> -->
              <!-- <i :class="iconObj[item.id]"></i> -->
              <!--文本-->
              <span>{{item.title}}</span>
            </template>
            <!--二级菜单-->
            <el-menu-item
              :index="'/'+subItem.path"
              v-for="subItem in item.children"
              :key="subItem.subItemid"
              @click="saveNavState('/'+subItem.path)"
            >
              <template slot="title">
                <!--图标-->
                <i class="el-icon-menu"></i>
                <!--文本-->
                <span>{{subItem.title}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      // 左侧菜单数据
      menulist: [
        {
          id: '1',
          title: '个人信息管理',
          path: 'PersonManager',
          children: [
            {
              subItemid: '11',
              title: '个人信息',
              path: 'PersonInfo'
            },
            {
              subItemid: '12',
              title: '修改密码',
              path: 'upDatePass'
            }
          ]
        },
        {
          id: '2',
          title: '教师信息管理',
          path: 'TeacherManager',
          children: [
            {
              subItemid: '21',
              title: '教师信息',
              path: 'TeacherInfo'
            }
          ]
        },
        {
          id: '3',
          title: '学生信息管理',
          path: 'StudentManager',
          children: [
            {
              subItemid: '31',
              title: '学生信息',
              path: 'StudentInfo'
            }
          ]
        },
        {
          id: '4',
          title: '课程信息管理',
          path: 'LessonManager',
          children: [
            {
              subItemid: '41',
              title: '课程信息',
              path: 'LessonInfo'
            }
          ]
        }
      ],
      iconObj: {
        '1': 'iconfont icon-user',
        '2': 'iconfont icon-jiaoshiguanli',
        '3': 'iconfont icon-xuesheng',
        '4': 'iconfont icon-kecheng'
        // '3': 'iconfont icon-chengji',
        // '4': 'iconfont icon-tongjifenxi'
      },
      Iscollapse: true,
      activePath: ''
    }
  },
  computed: {
  },
  watch: {
  },
  created () {
    // this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 点击按钮，切换菜单的折叠与展开
    toggleCollapse () {
      this.Iscollapse = !this.Iscollapse
    },
    // 保存链接的激活状态
    saveNavState (activePath) {
      // alert(activePath)
      // console.log(activePath)
      window.sessionStorage.setItem('activePath', activePath)
      console.log(window.sessionStorage.getItem('activePath'))
      this.activePath = activePath
    }
  }
}
</script>

<style scoped>
.home-container{
  height: 100%;
  font-size: 16px;
}
.el-header{
  background-color: #a6e3e9;
  display: flex;
  justify-content: space-between;
  padding: 0;
  align-items: center;
}
.el-aside{
  background-color: #a6e3e9;

}
.el-aside  .el-menu{
    border-right:none;
}

.el-main{
  background-color: #e3fdfd;
}

.el-header  img {
   width: 60px;
   height: 60px;
   border-radius: 50%;
   background-color: #eee;
}
.el-header >div {
    display: flex;
    align-items: center;
}
.el-header >div span {
      margin-left: 15px;
}
.el-button{
  background-color:#e3fdfd;
  color: black;
}
.iconfont{
  /* background: #000; */
  font-size:32px;
  margin-right: 10px;
}

.toggle-button {
  background-color: green;
  font-size:10px;
  line-height: 24px;
  color:black;
  text-align: center;
  letter-spacing: 0.2rem;
  cursor: pointer;
}

</style>
