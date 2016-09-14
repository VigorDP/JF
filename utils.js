// 数据类型判断
$.extend({
	isString:function(str){
		return typeof str=='string';
	},
	isNumber:function(num){
		return typeof num=='number'&&num==num;
	},
	isNaN:function(nan){
		return nan!==nan;
	},
	isBoolean:function(bool){
		return typeof bool=='boolean';
	},
	isNull:function(nu){
		return typeof nu=='object'&&!nu;
	},
	isUndefined:function(un){
		return typeof un=='undefined';
	},
	isFunction:function(fn){
		return typeof fn=='function';
	},
	isObject:function(obj){
		return Object.prototype.toString.call(obj)=='[object Object]';
	},
	isDate: function(obj) {
	          return Object.prototype.toString.call(obj) === '[object Date]';
	},
	isArray: function(obj) {
	          return Object.prototype.toString.call(obj) === '[object Array]';
	},
	isRegExp: function(obj) {
	          return Object.prototype.toString.call(obj) === '[object RegExp]';
	},
	has:function(obj,key){
		return Object.prototype.hasOwnProperty.call(obj,key);
	},
	//obj可能是对象(无length属性)、数组、字符串及其他任意类型
	isEmpty:function(obj){
		if (obj==null) {
			return true;
		}else if($.isArray(obj)||$.isString(obj)){
			return obj.length==0;
		}else if($.isObject(obj)){
			for(var i in obj){
				if($.has(obj,i)){
					return false;
				}
			}
			return true;
		}else{
			return false;
		}
	}
})

//格式化日期、返回指定长度的随机字符串、对象深度克隆、数组去重、解析URL、
$.extend({
	// $.parseDate(date,'YYYY-MM-DD hh:mm:ss')
	parseDate:function(date,regstr){
		var obj={
			'Y+':date.getFullYear(),
			'M+':date.getMonth()+1,
			'D+':date.getDate(),
			'h+':date.getHours(),
			'm+':date.getMinutes(),
			's+':date.getSeconds()
		}
		for(var i in obj){
			var reg=new RegExp('('+i+')');
			if(reg.test(regstr)){
				var flag=RegExp.$1;
				regstr=regstr.replace(flag,function(flag){
					return flag.length==1?'0'+obj[i]:obj[i];
				})
			}
		}
		return regstr;
	},
	// $.getRandomStr(5)
	getRandomStr:function(num){
		var str='';
		for(;str.length<num;str+=Math.random().toString(36).slice(2));
		return str.slice(0,num);
	},
	// var obj=$.deepClone([[],2,{d:1},null])
	deepClone:function(obj){
		var obj_new=$.isObject(obj)?{}:[];
		// 数组和对象都可用for in循环，但对象不能用for循环，因为无length属性
		for(var i in obj){
			if($.isObject(obj[i])||$.isArray(obj[i]))
				obj_new[i]=$.deepClone(obj[i]);
			else
				obj_new[i]=obj[i]
		}
		return obj_new;
	},
	/*var res=$.arrayUnique(arr)返回去掉的元素数组，注意：
	1、使用严格相等===；
	2、arr.splice方法返回的是数组；
	3、内层循环j的自增运算在循环体内*/
	arrayUnique:function(arr){
		var res=[];
		for(var i=0;i<arr.length;i++){
			for(var j=i+1;j<arr.length;){
				if(arr[i]===arr[j])
					res.push(arr.splice(j,1)[0]);
				else{
					j++;
				}
			}
		}
		return res;
	},
	/**
	 * @param  {string}
	 * @return {object}
	 */
	parseUrl: function (url) {
	        var index_query=url.indexOf('?'),
	        	   index_hash=url.indexOf('#');
	        var url_query='',url_hash='';
	        var queryObj={};
	        if(index_query!=-1){
	              url_query=url.slice(index_query+1);
	              if(index_hash!=-1){
	              	url_query=url.slice(index_query+1,index_hash);
	              	url_hash=url.slice(index_hash+1);
	              }
	              var arr=url_query.split('&');
	              arr.forEach(function(value,item){
	              	var tem=value.split('=');
	              	queryObj[encodeURI(tem[0])]=encodeURI(tem[1]);
	              })
	        }else if(index_hash!=-1)
	        	   url_hash=url.slice(index_hash+1);
	        return{
	        	query:queryObj,
	        	hash:url_hash
	        }
          }
})