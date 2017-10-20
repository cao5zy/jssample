(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['ramda'], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('ramda'));
    } else {
        root.returnExports = factory(root.ramda);
    }
    }(global, function (R) {
    	const fn = age => R.when(R.lt(R.__, 16), R.always(16))(age);
    	console.log(fn(32));

    	const fn1 = n => R.when((n)=>n>17, ()=>console.log('hello'))(n);

    	fn1(18);

    	const fn2 = (dummy)=>R.when(()=>false, ()=>{console.log("fn2");return 3;})(dummy);

    	console.log(fn2(null));

        let [p1, p2] = [2,5];
        const fu3 = ([pp1, pp2])=>console.log(pp1, pp2);
        fu3([p1, p2]);

        const fn4 = ([p1, p2])=>R.when(()=>p2 > 3, ()=>"Hello")(p1);

        console.log(fn4(["No Hello", 4]));

        const fn5 = ()=>R.when(()=>false, ()=>'fn5 true')({empty:true});

        console.log(fn5());

        data = {name:"hello"};
        let base = function(d){
            return (handler)=>{
                handler(d);
                return d;
            }
        };
        let log = (d)=>base(d)((d)=>console.log(d));
        let output = (d)=>console.log('output :', d);

        const fun6 = R.compose(output, log)
        fun6(data);

        let emptyFun = function(){
            console.log('empty1');
        }

        let emptyFun2 = function(){
            console.log('empty2');
        }

        let func7 = R.compose(emptyFun, emptyFun2);
        func7();
}));
