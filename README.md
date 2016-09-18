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

##时间：2016-9-15
```
+ 实现event.js，有三个API,$.fn.on,$.fn.off,$.fn.trigger;
+ 实现事件的订阅/发布机制，$.pubsub.subscribe,$.pubsub.unsubscribe和$.pubsub.publish;
+ 实现promise.js简易版,$.promise(fn(resolve,reject){})，参考了[这篇文章](http://www.jianshu.com/p/473cd754311f);
```

##时间：2016-9-18
```
+ 在ajax.js中添加$.ajaxs函数，该函数接受urls数组及成功和失败回调，将结果传入成功回调，结果是一个跟urls数组对应的数组，即若ulrs=[url_1,url_2]，那么结果是[resutl_url_1,result_url_2]，实现过程中遇到两个难点：1、如何确保结果有序？2、如何保证成功回调的触发时机？解决方式：对urls数组遍历时，用上index信息；用一个计数器保证所有请求结束才调用回调;
```

