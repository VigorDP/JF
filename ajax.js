$.extend({
	/**
	 * @description{原生JS的ajax函数}
	 * @param  {object}
	 * @return {null}
	 */
	ajax:function(options,success,error){
		var url=options&&options.url||'',
		     type=options&&options.type&&options.type.toUpperCase()||'GET',
		     params=options&&formatObj(options.params)||'',
		     sucFun=success||function(){},
		     errFun=error||function(){},
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
		var res={};
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
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
	},
	ajaxs:function(urls,onSuccess,onError){
		var result=[];
		var len=urls.length;
		debugger;
		if(len==0){
			return [];
		}
		urls.forEach(function(value,key){
			$.ajax({
				url:value
			},function(res){
				len--;
				result[key]=res;
				//此处必须用len计数来判定回调执行时机，若用result.length==3会有问题，因为可能result[2]=res
				//先执行完毕导致result[0]或result[1]为空，但当result[2]=res时，result.length就会更新为3了
				if(len==0){
					onSuccess&&onSuccess(result);
				}
			},
			function(status){
				onError(status);
				// result=null;
			});
		})
	}
})