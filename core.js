(function(that){
	var $=function(selector,context){
		return new $.prototype.init(selector,context);
	};
	$.fn=$.prototype;
	$.fn.init=function(selector,context){
		var reg=/(#|\.|(\w)+){1}/;
		if(reg.test(selector)){
			var flag=RegExp.$1;
			// console.log(flag)
			//注意replace方法返回一个新字符串
			var _selector=selector.replace(flag,'');
			// console.log(selector)
			var element='';
			if(flag=='#'){
				element=document.getElementById(_selector);
				this[0]=element;
				this.length=1;
				return this;
			}
			else if(flag=='.'){
				//getElementsByClassName方法，IE下只支持IE11，可用querySelectorAll替换，支持IE8+
				// element=document.getElementsByClassName(_selector);
				element=document.querySelectorAll(selector);
				for(var i=0,len=element.length;i<len;i++){
					this[i]=element[i];
					this.length=i+1;
				}
				return this;
			}else if(typeof flag=='string'){
				element=document.getElementsByTagName(flag);
				if(element){
					if(element.length>=2){
						for(var i=0,len=element.length;i<len;i++){
							this[i]=element[i];
							this.length=i+1;
						}
						return this;
					}
					this[0]=element;
					this.length=1;
					return this;
				}
			}
		}
	}
	$.fn.init.prototype=$.fn;
	that.$=$;

	$.extend=$.fn.extend=function(destination,source){
		if(typeof source=='undefined'){
			source=destination;
			destination=this;
			// console.log(this)；
		}
		for(var key in source){
			if(source.hasOwnProperty(key)){
				destination[key]=source[key];
			}
		}
		return destination;
	}
	//测试 
	// $.fn.extend方式调用时，this指向$.fn,即原型对象
	// $.fn.extend({
	// 	ab:function(){}
	// })
	// // $.extend方式调用时，this指向$,即构造函数
	// $.extend({
	// 	cd:function(){}
	// })

	$.fn.extend({
		each:function(func){
			var len=this.length;
			for(var i=0;i<len;i++){
				func.call(this[i],this[i],i);
			}
			return this;
		}
	})
}(this))