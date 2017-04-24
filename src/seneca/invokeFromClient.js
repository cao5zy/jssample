/*
demonstrate how to use seneca to invoke the service on the web
*/

var seneca = require('seneca')();

seneca.client({port:9090,host:'localhost'})
.act({url:'auth', cmd:'login', username:'czy'}, (err, res)=>console.log(err, res));
