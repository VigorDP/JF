# JF
自己编写的简化版Jquery框架，用于学习Jquery设计思想和巩固JS基础

#功能

##时间：2016-9-13
````
+ 实现core.js(主要是原型继承$.fn.init.prototype=$.fn和extend函数的设计)
+ 支持id选择器、class选择器、标签选择器
+ 实现each函数

测试结果：
````
![测试结果](./test.png)



##时间：2016-9-14
````
+ 实现utils.js(包含数据类型判断函数、格式化日期、返回指定长度的随机
  字符串、对象深度克隆、数组去重、解 析URL等功能函数，通过$.extend
  函数附加在$上，而不是$.prototype上)
+ 实现cookie的增删查功能，通过一个函数传不同参数搞定$.cookie(name,value,options)
+ 实现ajax函数，包含两种实现方式：1、原生JS版$.ajax(options)；2、Promise版$.ajaxPromise(options)
+ 添加core.js的原理图，如下：（图片来自大搜车前端团队）
````
![JF核心原理](./core.jpg)

