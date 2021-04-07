const reg = /[A-Z]/g;
function lowerCaseWithPrefix(str, prefix){
  return str.replace(reg, (s, i)=> i === 0 ? s.toLowerCase() : `${prefix}${s.toLowerCase()}`)
}
// console.log(lowerCaseWithPrefix('Abcd_-=123GG[pPp]', '@'));

function flatternArray(arr){
  const result = [];

  function flatternAnything(anything){
    if(Array.isArray(anything)){
      anything.forEach(item => {
        flatternAnything(item);
      })
    }else if(Object.prototype.toString.call(anything) === '[object Object]'){
      flatternAnything(Object.values(anything));
    }else{
      result.push(anything);
    }
  }
  flatternAnything(arr);

  return result;
}

const testCase = [{test: [1,2,3, {test: ['']}]}, 666, 't', [['q',0,], 'p']];

console.log(flatternArray(testCase))