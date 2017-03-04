/*
demonstrate how to use seneca to publish the mudule plugin to web
*/

var seneca = require('seneca')();

seneca.use('./pluginModule.js');

//调用的url http://localhost:9090/act?url=auth&cmd=login&username=czy
// curl -d {\"url\":\"auth\",\"cmd\":\"login\",\"username\":\"czy\"} -v http://localhost:9090/act
seneca.listen({port:9090});