console.warn('module loaded');

var a = {a:1}, b=1;
console.warn('in entrycall', process);

module.exports = {
	show: (url) => {
		var imgEL = document.createElement('img');
		imgEL.src = url;
		document.querySelector('#app').appendChild(imgEL);
	},
	log: ()=>{
		console.warn('log called.')
	},
	a,
	b,
	env: process.NODE_ENV
}

setTimeout(()=>{a.a=2;b=2}, 1000)