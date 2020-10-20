
var co=require('co');
co(function*(){
    var a=yield Promise.resolve(1);
    console.warn('a=', a);
    var b = yield later(10);
    console.warn('b=', b);
    var c=yield fn;
    console.warn('c=', c);
    var d=yield fn(5);
    console.warn('d=', d);
    var e=yield [Promise.resolve('a'), later('b'), fn, fn(5)];
    console.warn('e=', e);
    var f = yield {a: Promise.resolve('a'), b: later('b'), c:fn,d:fn(5)}
    console.warn('f=', f);
    function*fn(n){n=n||1;var a=yield later(n);return 'fn_'+a;}
    function later(n, t){t=t||1000;return function(done){setTimeout(function(){done(null, n)}, t)}}
}).catch(function(e){console.error(e)})