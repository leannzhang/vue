/*
Navicat MySQL Data Transfer

Source Server         : test1
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : studentmanager

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2020-12-21 15:25:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admininfo
-- ----------------------------
DROP TABLE IF EXISTS `admininfo`;
CREATE TABLE `admininfo` (
  `Acount` varchar(10) NOT NULL,
  `role` int(2) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `career` varchar(10) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`Acount`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admininfo
-- ----------------------------
INSERT INTO `admininfo` VALUES ('Azly', '0', '张兰叶', '系统管理员', '13297324211');
INSERT INTO `admininfo` VALUES ('Admin', '0', '我是可爱的小张啊', '系统管理员2号', '13297324211');
INSERT INTO `admininfo` VALUES ('Azly2', '0', '张兰叶', '系统管理员', '13297324211');
INSERT INTO `admininfo` VALUES ('Azly3', '0', '张兰叶', '系统管理员', '13297324211');
INSERT INTO `admininfo` VALUES ('Azly4', '0', '张兰叶', '系统管理员', '13297324211');
INSERT INTO `admininfo` VALUES ('Azly5', '0', '张兰叶', '系统管理员', '13297324211');
INSERT INTO `admininfo` VALUES ('Azly6', '0', '张兰叶', '系统管理员', '13297324211');
INSERT INTO `admininfo` VALUES ('Azly7', '0', '张兰叶', '系统管理员', '13297324211');
INSERT INTO `admininfo` VALUES ('Azly8', '0', '张兰叶', '系统管理员', '13297324211');
INSERT INTO `admininfo` VALUES ('Azly9', '0', '张兰叶', '系统管理员', '13297324211');
INSERT INTO `admininfo` VALUES ('Azly10', '0', '张兰叶', '系统管理员', '13297324211');
INSERT INTO `admininfo` VALUES ('Azly11', '0', '张兰叶', '系统管理员', '13297324211');
INSERT INTO `admininfo` VALUES ('Azly12', '0', '张兰叶', '系统管理员', '13297324211');
INSERT INTO `admininfo` VALUES ('Azly13', '0', '张兰叶', '系统管理员', '13297324211');
INSERT INTO `admininfo` VALUES ('Azly14', '0', '张兰叶', '系统管理员', '13297324211');
INSERT INTO `admininfo` VALUES ('Azly15', '0', '张兰叶', '系统管理员', '13297324211');
INSERT INTO `admininfo` VALUES ('Azly16', '0', '张兰叶', '系统管理员', '13297324211');
INSERT INTO `admininfo` VALUES ('Azly17', '0', '张兰叶', '系统管理员', '13297324211');

-- ----------------------------
-- Table structure for lessoninfo
-- ----------------------------
DROP TABLE IF EXISTS `lessoninfo`;
CREATE TABLE `lessoninfo` (
  `CourseID` varchar(11) NOT NULL,
  `courseName` varchar(11) DEFAULT NULL,
  `courseTeacher` varchar(11) DEFAULT NULL,
  `courseDate` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`CourseID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lessoninfo
-- ----------------------------
INSERT INTO `lessoninfo` VALUES ('L1', '数学课', 'T1234', '2020年下学期');
INSERT INTO `lessoninfo` VALUES ('L2', '英语课', 'T1235', '2020年下学期');
INSERT INTO `lessoninfo` VALUES ('L3', '物理课', 'T1236', '2020年下学期');
INSERT INTO `lessoninfo` VALUES ('L4', '化学课', 'T1237', '2020年下学期');
INSERT INTO `lessoninfo` VALUES ('L5', '语文课', 'T1238', '2020年下学期');
INSERT INTO `lessoninfo` VALUES ('L6', '历史课', 'T1239', '2020年下学期');
INSERT INTO `lessoninfo` VALUES ('L7', '生物课', 'T1210', '2020年下学期');
INSERT INTO `lessoninfo` VALUES ('L8', 'C语言课', 'T1211', '2020年下学期');

-- ----------------------------
-- Table structure for loginuser
-- ----------------------------
DROP TABLE IF EXISTS `loginuser`;
CREATE TABLE `loginuser` (
  `Acount` varchar(10) NOT NULL,
  `password` varchar(16) NOT NULL,
  `role` int(2) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of loginuser
-- ----------------------------
INSERT INTO `loginuser` VALUES ('Azly', '123456', '0');
INSERT INTO `loginuser` VALUES ('Admin', '123456', '0');

-- ----------------------------
-- Table structure for studentinfo
-- ----------------------------
DROP TABLE IF EXISTS `studentinfo`;
CREATE TABLE `studentinfo` (
  `Acount` varchar(11) NOT NULL,
  `username` varchar(25) DEFAULT NULL,
  `password` varchar(16) NOT NULL,
  `role` int(2) DEFAULT NULL,
  `faculty` varchar(12) DEFAULT NULL,
  `grade` varchar(10) DEFAULT NULL,
  `class` varchar(25) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`Acount`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of studentinfo
-- ----------------------------
INSERT INTO `studentinfo` VALUES ('S2019200267', '张兰叶1号', '2019200266', '2', '初中', '初三', '295', '13297324210');
INSERT INTO `studentinfo` VALUES ('S1235', '向不凡', '123123', '2', null, null, '295', '13297324211');
INSERT INTO `studentinfo` VALUES ('S2019200269', '张兰叶1号', '2019200266', '2', '初中', '初三', '295', '13297324210');
INSERT INTO `studentinfo` VALUES ('S2019200230', '张兰叶1号', '2019200266', '2', '初中', '初三', '295', '13297324210');
INSERT INTO `studentinfo` VALUES ('S2019200231', '张兰叶1号', '2019200266', '2', '初中', '初三', '295', '13297324210');
INSERT INTO `studentinfo` VALUES ('S2019200232', '刘佳鑫1号', '2019200266', '2', '初中', '初三', '295', '13297324210');
INSERT INTO `studentinfo` VALUES ('S2019200233', '刘佳鑫1号', '2019200266', '2', '初中', '初三', '295', '13297324210');
INSERT INTO `studentinfo` VALUES ('S2019200234', '刘佳鑫1号', '2019200266', '2', '初中', '初三', '295', '13297324210');
INSERT INTO `studentinfo` VALUES ('S2019200235', '刘佳鑫1号', '2019200266', '2', '初中', '初三', '295', '13297324210');
INSERT INTO `studentinfo` VALUES ('S2019200236', '刘佳鑫1号', '2019200266', '2', '初中', '初三', '295', '13297324210');
INSERT INTO `studentinfo` VALUES ('S2019200237', '刘佳鑫1号', '2019200266', '2', '初中', '初三', '295', '13297324210');

-- ----------------------------
-- Table structure for teacherinfo
-- ----------------------------
DROP TABLE IF EXISTS `teacherinfo`;
CREATE TABLE `teacherinfo` (
  `Acount` varchar(11) NOT NULL,
  `username` varchar(25) DEFAULT NULL,
  `password` varchar(16) NOT NULL,
  `role` int(2) DEFAULT NULL,
  `faculty` varchar(12) DEFAULT NULL,
  `grade` varchar(10) DEFAULT NULL,
  `major` varchar(25) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`Acount`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of teacherinfo
-- ----------------------------
INSERT INTO `teacherinfo` VALUES ('T1115', '我是小张啊', '123456', '1', '高中部', '高二', '数学', '1234564');
INSERT INTO `teacherinfo` VALUES ('T1101', '我是小张啊', '123456', '1', '高中部', '高二', '数学', '1234564');
INSERT INTO `teacherinfo` VALUES ('T1116', '我是小张啊', '123456', '1', '高中部', '高二', '数学', '1234564');
INSERT INTO `teacherinfo` VALUES ('T1117', '我是小张啊', '123456', '1', '高中部', '高二', '数学', '1234564');
INSERT INTO `teacherinfo` VALUES ('T1118', '我是小张啊', '123456', '1', '高中部', '高二', '数学', '1234564');
INSERT INTO `teacherinfo` VALUES ('T1119', '我是小张啊', '123456', '1', '高中部', '高二', '数学', '1234564');
INSERT INTO `teacherinfo` VALUES ('T1120', '莫镜融', '123456', '1', '初中部', '初二', '语文', '1234564');
INSERT INTO `teacherinfo` VALUES ('T1121', '莫镜融', '123456', '1', '初中部', '初二', '语文', '1234564');
INSERT INTO `teacherinfo` VALUES ('T1122', '莫镜融', '123456', '1', '初中部', '初二', '语文', '1234564');
INSERT INTO `teacherinfo` VALUES ('T1123', '莫镜融', '123456', '1', '初中部', '初二', '语文', '1234564');
INSERT INTO `teacherinfo` VALUES ('T1124', '莫镜融', '123456', '1', '初中部', '初二', '语文', '1234564');
INSERT INTO `teacherinfo` VALUES ('T1125', '莫镜融', '123456', '1', '初中部', '初二', '语文', '1234564');
INSERT INTO `teacherinfo` VALUES ('T1234', '向不凡', '123123', '1', '初中部', '初二', '语文', '1234564');
INSERT INTO `teacherinfo` VALUES ('T123', '向不凡', '123123', '1', '初中部', '初二', '语文', '1234564');
INSERT INTO `teacherinfo` VALUES ('T124', '向不凡', '123123', '1', '初中部', '初二', '语文', '1234564');
INSERT INTO `teacherinfo` VALUES ('T126', '向不凡', '123123', '1', '初中部', '初二', '语文', '1234564');
INSERT INTO `teacherinfo` VALUES ('T15', '向不凡', '123123', '1', '初中部', '初二', '语文', '1234564');
INSERT INTO `teacherinfo` VALUES ('T18', '向不凡', '123123', '1', '初中部', '初二', '语文', '1234564');
