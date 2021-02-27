const express = require('express')
const router = express.Router()
const api = require('./api')

// 登录方法
router.get('/login', (req, res, next) => {
  api.login(req, res, next)
})

// 个人信息方法
router.get('/AdminInfo', (req, res, next) => {
  // console.log('PersonInfo_router.get')
  api.showAllAdmin(req, res, next)
})
router.get('/Adminupdatepass', (req, res, next) => {
  // console.log('PersonInfo_router.get')
  api.updatePass(req, res, next)
})

// 教师模块
router.get('/TeacherInfo', (req, res, next) => {
  // console.log('TeacherInfo_router.get')
  api.showAllTeacher(req, res, next)
})

router.get('/addTeacher', (req, res, next) => {
  // console.log('addTeacher_router.get')
  api.addTeacher(req, res, next)
})

router.get('/selectTeacher', (req, res, next) => {
  // console.log('selectTeacher_router.get')
  api.selectTeacher(req, res, next)
})

router.get('/editTeacherInfo', (req, res, next) => {
  // console.log('editTeacherInfo_router.get')
  api.editTeacherInfo(req, res, next)
})

router.get('/deleteTeacher', (req, res, next) => {
  // console.log('edeleteTeacher_router.get')
  api.deleteTeacher(req, res, next)
})

// ========================================================学生模块
router.get('/StudentInfo', (req, res, next) => {
  // console.log('TeacherInfo_router.get')
  api.showAllStudent(req, res, next)
})

router.get('/addStudent', (req, res, next) => {
  // console.log('addTeacher_router.get')
  api.addStudent(req, res, next)
})

router.get('/selectStudent', (req, res, next) => {
  // console.log('selectTeacher_router.get')
  api.selectStudent(req, res, next)
})

router.get('/editStudentInfo', (req, res, next) => {
  // console.log('editTeacherInfo_router.get')
  api.editStudentInfo(req, res, next)
})

router.get('/deleteStudent', (req, res, next) => {
  // console.log('edeleteTeacher_router.get')
  api.deleteStudent(req, res, next)
})

router.get('/LessonInfo', (req, res, next) => {
  // console.log('edeleteTeacher_router.get')
  api.showAllLesson(req, res, next)
})

module.exports = router
