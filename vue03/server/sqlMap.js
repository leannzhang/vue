var sqlMap = {
  // 管理员相关操作
  selectUser: 'SELECT * FROM LoginUser WHERE Acount = ? AND password = ? ',
  showtAdmin: 'SELECT * FROM AdminInfo WHERE Acount = ?',
  showtAllAdmin: 'SELECT * FROM AdminInfo',
  updatePass: 'update loginuser set password= ? where Acount = ?',

  // 教师相关操作
  showAllTeacher: 'SELECT * FROM TeacherInfo',
  selectTeacher: 'SELECT * FROM TeacherInfo WHERE Acount = ?',
  addTeacher: 'insert into TeacherInfo (Acount,username,role,password) values (?,?,"1",?)',
  editTeacherInfo: 'update TeacherInfo set username= ? , password = ? where Acount = ?',
  deleteTeacher: 'Delete FROM TeacherInfo where Acount = ?',

  // 学生相关操作
  showAllStudent: 'SELECT * FROM studentinfo',
  selectStudent: 'SELECT * FROM studentinfo WHERE Acount = ?',
  addStudent: 'insert into studentinfo (Acount,username,role,password,class,phone) values (?,?,"2",?,"295","13297324211")',
  editStudentInfo: 'update studentinfo set username= ? , password = ? where Acount = ?',
  deleteStudent: 'Delete FROM studentinfo where Acount = ?',

  // 课程相关
  showAllLesson: 'SELECT * FROM lessoninfo'
  // selectStudent: 'SELECT * FROM studentinfo WHERE Acount = ?',
  // addStudent: 'insert into studentinfo (Acount,username,role,password,class,phone) values (?,?,"2",?,"295","13297324211")',
  // editStudentInfo: 'update studentinfo set username= ? , password = ? where Acount = ?',
  // deleteStudent: 'Delete FROM studentinfo where Acount = ?'
}

module.exports = sqlMap
