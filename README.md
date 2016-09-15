# JF
自己编写的简化版Jquery框架，用于学习Jquery设计思想和巩固JS基础

#功能

##时间：2016-9-13
````
1、 实现core.js(主要是原型继承$.fn.init.prototype=$.fn和extend函数的设计)
2、 支持id选择器、class选择器、标签选择器
3、 实现each函数

测试结果：
````
![测试结果](./test.png)



##时间：2016-9-14
````
1、 实现utils.js(包含数据类型判断函数、格式化日期、返回指定长度的随机字符串、对象深度克隆、数组去重、解 析URL等功能函数，通过$.extend
    函数附加在$上，而不是$.prototype上)
2、 实现cookie的增删查功能，通过一个函数传不同参数搞定$.cookie(name,value,options)
3、 实现ajax函数，包含两种实现方式：1、原生JS版$.ajax(options)；2、Promise版$.ajaxPromise(options)
4、 添加core.js的原理图，如下：（图片来自大搜车前端团队）
````
![JF核心原理](./core.jpg)

##时间：2016-9-15
```
1、 实现event.js，有三个API,$.fn.on,$.fn.off,$.fn.trigger;
2、 实现事件的订阅/发布机制，$.pubsub.subscribe,$.pubsub.unsubscribe和$.pubsub.publish;
3、 实现promise.js简易版,$.promise(fn(resolve,reject){})
```
promise的实现参考了[这篇文章](http://www.jianshu.com/p/473cd754311f);

