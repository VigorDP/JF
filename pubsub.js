$.extend({
	pubsub:(function(){
		var obj={};
		var subscribe=function(type,fun){
			// debugger;
			if(obj[type]){
				obj[type].push(fun);
			}else{
				obj[type]=[];
				obj[type].push(fun);
			}
		};
		var unsubscribe=function(type){
			// debugger;
			if(obj[type]&&obj[type].length){
				obj[type]=[];
			}
		}
		var publish=function(type,data){
			// debugger;
			if(!obj[type]||!obj[type].length){
				console.log('没有订阅该类型的事件');
			}else{
				Array.prototype.forEach.call(obj[type],function(value,key){
					value(data);
				})
			}
		};
		return{
			subscribe:subscribe,
			publish:publish,
			unsubscribe:unsubscribe
		}
	})()
})