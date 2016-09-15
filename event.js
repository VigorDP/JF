$.fn.extend({
	on:function(type,fun){
		this.each(function(value,key){
			value.addEventListener(type,fun,false);
		});
		return this;
	},
	off:function(type,fun){
		this.each(function(value,key){
			value.removeEventListener(type,fun,false);
		})
		return this;
	},
	trigger:function(type,data){
		var event=document.creatEvent('HTMLEvents');
		event.initEvent(type,true,true);
		event.data=data||{};
		event.eventName=type;
		event.target=this;
		this.each(function(value,key){
			v.dispatchEvent(event);
		})
		return this;
	}
})