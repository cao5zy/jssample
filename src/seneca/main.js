/*
demonstrate how to use seneca to build microservice
*/

var seneca = require('seneca')();

//demo1 start
//添加pattern：{role:'math', cmd:'sum'}
seneca.add({role:'math', cmd:'sum'}, function(msg, respond){
	var sum = msg.left + msg.right;
	respond(null, {answer:sum});
});


//发送消息，如果满足pattern，那么pattern就会被执行。
//下面的代码中，发送的对象显然是满足了pattern的
seneca.act({role:'math', cmd:"sum", left:3, right:5}, console.log);
//demo1 end

//demo2 start
//添加pattern：{role:'math', cmd:'sum', left:4}
seneca.add({role:'math', cmd:'sum', left:4}, function(msg, respond){
	var sum = msg.left + msg.right + 1;
	respond(null, {answer:sum});
});


//下面的代码中，发送的对象没有能够满足demo2中的pattern，但满足了demo1中的pattern，因此返回的还是demo1的结果
seneca.act({role:'math', cmd:"sum", left:3, right:5}, console.log);
//demo2 end