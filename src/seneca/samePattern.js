/*
demonstrate how to use seneca to build microservice
*/

var seneca = require('seneca')();

//当pattern相同时，调用最后添加进来的那个pattern。
seneca.add({role:'math', cmd:'sum'}, function(msg, respond){
	console.log('call2');
	var sum = parseInt(msg.left) + parseInt(msg.right);
	respond(null, {answer:sum});
})
.add({role:'math', cmd:'sum'}, function(msg, respond){
	console.log('call1')

	if(msg.left > 3) return respond(new Error("msg.left > 3"));

	this.prior(msg, function(err, result){
		if(err) respond(err);

		console.log('call3');
		result.info = msg.left + '+' + msg.right;
		respond(null, result);
	})
});

seneca.act({role:'math', cmd:'sum', left:3, right:5}, console.log);