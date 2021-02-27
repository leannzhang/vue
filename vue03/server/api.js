const mysql = require('mysql')
const dbConfig = require('./db')
const sqlMap = require('./sqlMap')

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true // 多语句查询
})

module.exports = {
  // 登录操作
  login(req, res, _next) {
    let Acount = req.query.Acount
    let Password = req.query.Password
    pool.getConnection((_err, connection) => {
      let sql = sqlMap.selectUser
      connection.query(sql, [Acount, Password], (_err, result) => {
        connection.release()
        let state = {}
        if (result.length > 0) {
          state.state = 1
          res.json(state)
        } else {
          state.state = 0
          res.json(state)
        }
      })
    })
  },

  // 显示指定管理员
  showAdmin(req, res, _next) {
    let Acount = req.query.Acount
    pool.getConnection((_err, connection) => {
      let sql = sqlMap.showtAdmin
      connection.query(sql, [Acount], (_err, result) => {
        connection.release()
        let state = {}
        if (result.length > 0) {
          state.state = 1
          state.AdminInfo = result
          res.json(state)
        } else {
          state.state = 0
          res.json(state)
        }
      })
    })
  },

  // 显示所有管理员
  showAllAdmin(req, res, _next) {
    pool.getConnection((_err, connection) => {
      let sql = sqlMap.showtAllAdmin
      connection.query(sql, (_err, result) => {
        connection.release()
        let state = {}
        if (result.length > 0) {
          state.state = 1
          state.AdminInfo = result
          res.json(state)
        } else {
          state.state = 0
          res.json(state)
        }
      })
    })
  },

  // 修改密码
  updatePass(req, res, _next) {
    pool.getConnection((_err, connection) => {
      // console.log('req.query' + req.query.Teacher.Acount)
      let sql = sqlMap.updatePass
      let Acount = req.query.Acount
      let password = req.query.password
      connection.query(sql, [password, Acount], (_err, result) => {
        console.log(_err)
        connection.release()
        let state = {}
        if (!_err) {
          state.state = 1
          // state.editTeacherInfo = result
          console.log(result)
          res.json(state)
        } else {
          state.state = 0
          res.json(state)
        }
      })
    })
  },

  /*  =================================教师模块========================================= */
  // 显示所有教师信息
  showAllTeacher(req, res, _next) {
    pool.getConnection((_err, connection) => {
      let sql = sqlMap.showAllTeacher
      connection.query(sql, (_err, result) => {
        connection.release()
        let state = {}
        if (result.length > 0) {
          state.state = 1
          state.TeacherInfo = result
          res.json(state)
        } else {
          state.state = 0
          res.json(state)
        }
      })
    })
  },

  // 添加教师信息
  addTeacher(req, res, _next) {
    pool.getConnection((_err, connection) => {
      // console.log('req.query' + req.query.Teacher.Acount)
      let sql = sqlMap.addTeacher
      let Acount = req.query.Acount
      let password = req.query.password
      let username = req.query.username
      console.log(Acount)
      console.log(password)
      console.log(username)
      connection.query(sql, [Acount, username, password], (_err, result) => {
        // res.json(result) // 向前端返回json格式的数据
        // console.log(res)
        // console.log(result)
        console.log('addTeacher')
        console.log(_err)
        connection.release()
        let state = {}
        if (!_err) {
          state.state = 1
          state.TeacherInfo = result
          console.log(result)
          res.json(state)
        } else {
          state.state = 0
          res.json(state)
        }
      })
    })
  },

  // 查询指定教师
  selectTeacher(req, res, _next) {
    let Acount = req.query.Acount
    pool.getConnection((_err, connection) => {
      let sql = sqlMap.selectTeacher
      connection.query(sql, [Acount], (_err, result) => {
        connection.release()
        let state = {}
        if (result.length > 0) {
          state.state = 1
          state.selectTeacherInfo = result
          console.log(state.selectTeacherInfo)
          res.json(state)
        } else {
          state.state = 0
          res.json(state)
        }
      })
    })
  },

  // 修改教师信息
  editTeacherInfo(req, res, _next) {
    pool.getConnection((_err, connection) => {
      // console.log('req.query' + req.query.Teacher.Acount)
      let sql = sqlMap.editTeacherInfo
      let Acount = req.query.Acount
      let password = req.query.password
      let username = req.query.username
      connection.query(sql, [username, password, Acount], (_err, result) => {
        // res.json(result) // 向前端返回json格式的数据
        // console.log(res)
        // console.log(result)
        console.log('editTeacherInfo_mysql')
        console.log(_err)
        connection.release()
        let state = {}
        if (!_err) {
          state.state = 1
          // state.editTeacherInfo = result
          // console.log(result)
          res.json(state)
        } else {
          state.state = 0
          res.json(state)
        }
      })
    })
  },

  // 删除教师信息
  deleteTeacher(req, res, _next) {
    pool.getConnection((_err, connection) => {
      // console.log('req.query' + req.query.Teacher.Acount)
      let sql = sqlMap.deleteTeacher
      let Acount = req.query.Acount
      connection.query(sql, [Acount], (_err, result) => {
        connection.release()
        let state = {}
        if (!_err) {
          state.state = 1
          res.json(state)
        } else {
          state.state = 0
          res.json(state)
        }
      })
    })
  },

  /*  =================================学生模块========================================= */
  // 显示所有学生信息
  showAllStudent(req, res, _next) {
    pool.getConnection((_err, connection) => {
      let sql = sqlMap.showAllStudent
      connection.query(sql, (_err, result) => {
        connection.release()
        console.log(_err)
        let state = {}
        if (result.length > 0) {
          state.state = 1
          state.StudentInfo = result
          res.json(state)
        } else {
          state.state = 0
          res.json(state)
        }
      })
    })
  },

  // 添加学生信息
  addStudent(req, res, _next) {
    pool.getConnection((_err, connection) => {
      // console.log('req.query' + req.query.Teacher.Acount)
      let sql = sqlMap.addStudent
      let Acount = req.query.Acount
      let password = req.query.password
      let username = req.query.username
      console.log(Acount)
      console.log(password)
      console.log(username)
      connection.query(sql, [Acount, username, password], (_err, result) => {
        // res.json(result) // 向前端返回json格式的数据
        // console.log(res)
        // console.log(result)
        console.log('addTeacher')
        console.log(_err)
        connection.release()
        let state = {}
        if (!_err) {
          state.state = 1
          state.StudentInfo = result
          console.log(result)
          res.json(state)
        } else {
          state.state = 0
          res.json(state)
        }
      })
    })
  },

  // 查询指定学生
  selectStudent(req, res, _next) {
    let Acount = req.query.Acount
    pool.getConnection((_err, connection) => {
      let sql = sqlMap.selectStudent
      connection.query(sql, [Acount], (_err, result) => {
        connection.release()
        let state = {}
        if (result.length > 0) {
          state.state = 1
          state.selectStudentInfo = result
          console.log(state.selectStudentInfo)
          res.json(state)
        } else {
          state.state = 0
          res.json(state)
        }
      })
    })
  },

  // 修改学生信息
  editStudentInfo(req, res, _next) {
    pool.getConnection((_err, connection) => {
      // console.log('req.query' + req.query.Teacher.Acount)
      let sql = sqlMap.editStudentInfo
      let Acount = req.query.Acount
      let password = req.query.password
      let username = req.query.username
      connection.query(sql, [username, password, Acount], (_err, result) => {
        // res.json(result) // 向前端返回json格式的数据
        // console.log(res)
        // console.log(result)
        console.log('editStudentInfo_mysql')
        console.log(_err)
        connection.release()
        let state = {}
        if (!_err) {
          state.state = 1
          // state.editTeacherInfo = result
          // console.log(result)
          res.json(state)
        } else {
          state.state = 0
          res.json(state)
        }
      })
    })
  },

  // 删除学生信息
  deleteStudent(req, res, _next) {
    pool.getConnection((_err, connection) => {
      // console.log('req.query' + req.query.Teacher.Acount)
      let sql = sqlMap.deleteStudent
      let Acount = req.query.Acount
      connection.query(sql, [Acount], (_err, result) => {
        connection.release()
        let state = {}
        if (!_err) {
          state.state = 1
          res.json(state)
        } else {
          state.state = 0
          res.json(state)
        }
      })
    })
  },

  /*  =================================课程模块========================================= */
  // 显示所有学生信息
  showAllLesson(req, res, _next) {
    pool.getConnection((_err, connection) => {
      let sql = sqlMap.showAllLesson
      connection.query(sql, (_err, result) => {
        connection.release()
        console.log(_err)
        let state = {}
        if (result.length > 0) {
          state.state = 1
          state.LessonInfo = result
          res.json(state)
        } else {
          state.state = 0
          res.json(state)
        }
      })
    })
  }
}
