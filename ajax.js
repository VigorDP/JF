$.extend({
	/**
	 * @description{原生JS的ajax函数}
	 * @param  {object}
	 * @return {null}
	 */
	ajax:function(options){
		var url=options&&options.url||'',
		     type=options&&options.type&&options.type.toUpperCase()||'GET',
		     params=options&&formatObj(options.params)||'',
		     sucFun=options&&options.success||function(){},
		     errFun=options&&options.error||function(){},
		     data=options&&options.data||{};
		     // debugger;
		 if(params){
		 	url=url+(url.indexOf('?')==-1?'?'+params.substring(0,params.length-1):'&'+params.substring(0,params.length-1));
		 }
		var xhr=new XMLHttpRequest();
		xhr.open(type,url,true);
		if(type=='POST'){
			xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
		}
		xhr.send($.isEmpty(data)?null:data);
		xhr.onreadystatechange=function(){
			if(xhr.status==200){
				sucFun&&sucFun(JSON.parse(xhr.responseText));
			}else{
				errFun&&errFun(xhr.status);
			}
		}
		function formatObj(obj){
			var str='';
			for(var i in obj){
				str+=(i+'='+obj[i])+'&';
			}
			return str;
		}
	},
	/**
	 * @description{ajax的Promise版}
	 * @param  {object}
	 * @return {promise}
	 */
	ajaxPromise:function(options){
		var url=options&&options.url||'',
		     type=options&&options.type&&options.type.toUpperCase()||'GET',
		     params=options&&formatObj(options.params)||'',
		     data=options&&options.data||{};
		 if(params){
		 	url=url+(url.indexOf('?')==-1?'?'+params.substring(0,params.length-1):'&'+params.substring(0,params.length-1));
		 }
		var xhr=new XMLHttpRequest();
		xhr.open(type,url,true);
		if(type=='POST'){
			xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
		}
		xhr.send($.isEmpty(data)?'':data);

		function formatObj(obj){
			var str='';
			for(var i in obj){
				str+=(i+'='+obj[i])+'&';
			}
			return str;
		}
		return new Promise(function(resolve,reject){
			xhr.onreadystatechange=function(){
				if(xhr.status==200){
					resolve(JSON.parse(xhr.responseText));
				}else{
					reject(xhr.status);
				}
			}
		})
	}
})