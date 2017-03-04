/*
demonstrate how to use seneca mudule plugin
*/
var seneca = require('seneca')();

seneca.use('./pluginModule.js');

//调用plugin中的功能
seneca.act({url:"auth", cmd:"login", username:"czy"}, (err, response)=>{
	console.log('login1 result is :', err, response);
});

seneca.act({url:"auth", cmd:"login", username:"czy2"}, (err, response)=>{
	console.log('login2 result is :', err, response);
});