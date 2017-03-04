/*
demonstrate how to develop seneca mudule plugin
*/

//plugin as file module
module.exports = function(options){
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
	});

	return "Authentication"

}