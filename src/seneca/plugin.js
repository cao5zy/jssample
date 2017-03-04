/*
demonstrate how to develop seneca plugin
*/

//plugin as function
function Authentication(options){
	//constructor of the plugin
	this.add({init:"Authentication"}, function(args, respond){
		console.log('Authentication Init');
		respond(null, null);//respond should be invoked
	});

	this.add({url:"auth", cmd:"login"}, function(args, respond){
		if(args.username == "czy")
		{
			respond(null, {result:'OK'});
		}
		else
		{
			respond(null, {result:'Failed'});
		}
	})

}

var seneca = require('seneca')();
//添加plugin
seneca.use(Authentication);

//调用plugin中的功能
seneca.act({url:"auth", cmd:"login", username:"czy"}, (err, response)=>{
	console.log('login1 result is :', err, response);
});

seneca.act({url:"auth", cmd:"login", username:"czy2"}, (err, response)=>{
	console.log('login2 result is :', err, response);
});