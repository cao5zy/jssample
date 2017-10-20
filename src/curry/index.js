/*
learning curry
*/

var _ = require('lodash');

var abc = function(a, b, c){
	return [a, b, c];
}

var curried = _.curry(abc);

console.log(curried(1,2,3));
console.log(curried(1)(2)(3));
console.log(curried(1)(3)(2));

function Account(){}
Account.prototype.connect = function(a,b,c){
	console.log('a:', a, 'b:', b, 'c:', c);
}

var acc = new Account();
var accCurried = _.curry(acc.connect);
accCurried(1)(2);

const arry = [{
	arr:[1,2]
}
,{
	arr:[3,4]
}
,{
	arr:[5,6]
}
,{
	arr:[]
}];
const objs = [{
	data:arry
}]

_(objs)
.flatMap(n=>{
	console.log('n:', n);
	return n.data
})
.flatMap(n=>{
	console.log('n', n);
	return n.arr;
})
.map(n=>{return {x:n}})
.map(n=>_(n).extend({m:"3"}).value())
.map(n=>console.log('new n', n))
.tap(n=>console.log('ns', n))
.value();


console.log(_({})
.extend({empty:true})
.extend({done:true})
.value());