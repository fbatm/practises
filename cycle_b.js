var a = require('./cycle_a.js');

console.log('in b', a);

exports.b = 'b';