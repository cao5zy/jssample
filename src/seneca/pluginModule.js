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

//UMD方式定义如下：
(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.returnExports = factory();
    }
    }(global, function () {

    	function authenticationService(){
			this.add({cmd:"auth", subCmd:"login"}, (args, respond)=>{
	    		respond(null, {result:"OK"});
	    	});
    		
    	}

    	return authenticationService;

}));