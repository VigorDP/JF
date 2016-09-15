$.extend({
	promise:function(fn){
		var state = 'pending';
		var doneList = [];
		var failList= [];
		this.then = function(done ,fail){
		    switch(state){
		          case "pending":
			        doneList.push(done);
			        //每次如果没有推入fail方法，我也会推入一个null来占位
			        failList.push(fail || null);
			        return this;
			        break;
		          case 'fulfilled':
			        done();
			        return this;
			        break;
		          case 'rejected':
			        fail();
			        return this;
			        break;
		    }
		}
		function resolve(newValue){
		    state = "fulfilled";
		    setTimeout(function(){
		        var value = newValue;
		        for (var i = 0;i<doneList.length;i++){
		             var temp = doneList[i](value);
		             if(temp instanceof Promise){
		                var newP =  temp;
		                for(i++;i<doneList.length;i++){
		                     newP.then(doneList[i],failList[i]);
		               }
		              }else{
		                  value = temp;
		              }
		         }
		     },0);
		}
		function reject(newValue){
		    state = "rejected";
		    setTimeout(function(){
		         var value = newValue;
		         var tempRe = failList[0](value);
		         //如果reject里面传入了一个promise，那么执行完此次的fail之后，将剩余的done和fail传入新的promise中
		         if(tempRe instanceof Promise){
		           var newP = tempRe;
		           for(i=1;i<doneList.length;i++){
		               newP.then(doneList[i],failList[i]);
		           }
		         }else{
		           //如果不是promise，执行完当前的fail之后，继续执行doneList
		           value =  tempRe;
		           doneList.shift();
		           failList.shift();
		           resolve(value);
		         }
		    },0);
		}
	          fn(resolve,reject);
	}
})