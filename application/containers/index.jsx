import React from 'react';

export function HomePage(){
	return <p>welcome home.</p>
}

export var test = 'test';

export var a = [];

function decorator(target, name, descriptor){
	// descriptor.value = function(v){console.warn(`set ${name} = ${v}`);return v + 1;};
	descriptor.value = 5;
	descriptor.writable = false;
	return descriptor;
}

export class deco{

	@decorator
	a
}

var x = {x: 1};

export default x;
setTimeout(()=>{x=2;test='test after timeout'}, 1000)