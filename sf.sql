/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80012
 Source Host           : localhost:3306
 Source Schema         : user1.0

 Target Server Type    : MySQL
 Target Server Version : 80012
 File Encoding         : 65001

 Date: 20/12/2019 11:22:41
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sf
-- ----------------------------
DROP TABLE IF EXISTS `sf`;
CREATE TABLE `sf`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sf
-- ----------------------------
INSERT INTO `sf` VALUES (1, '15566289602', 'fb81cbd4cff34628157883e6eb070a2d');
INSERT INTO `sf` VALUES (2, '13390422623', 'a30147f1af2bae7ea772997946446c30');
INSERT INTO `sf` VALUES (3, '15566289603', 'fb81cbd4cff34628157883e6eb070a2d');
INSERT INTO `sf` VALUES (4, '15566279602', 'fb81cbd4cff34628157883e6eb070a2d');
INSERT INTO `sf` VALUES (5, '15566765432', 'fb81cbd4cff34628157883e6eb070a2d');
INSERT INTO `sf` VALUES (6, '15576328632', 'fb81cbd4cff34628157883e6eb070a2d');
INSERT INTO `sf` VALUES (7, '15534254732', 'fb81cbd4cff34628157883e6eb070a2d');
INSERT INTO `sf` VALUES (8, '15538762456', '21ab4950349ec51d976650f7dd3357ee');

SET FOREIGN_KEY_CHECKS = 1;
