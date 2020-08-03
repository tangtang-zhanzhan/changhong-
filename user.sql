/*
Navicat MySQL Data Transfer

Source Server         : nz2004
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : changhong

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2020-08-03 23:06:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) DEFAULT NULL,
  `pas` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '15888888888', 'A1111111');
INSERT INTO `user` VALUES ('2', '15888888889', 'A1111111');
INSERT INTO `user` VALUES ('3', '15888888887', 'b1111111');
