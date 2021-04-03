function addFloatPart(str_a = '', str_b = ''){
  let resultArray = [];
  let point = Math.max(str_a.length, str_b.length) - 1;
  let step = 0;
  while(point >= 0){
    let plusResult = Number(str_a[point]??0) + Number(str_b[point]??0) + step;
    if(plusResult >= 10){
      plusResult -= 10;
      step = 1;
    }else{
      step = 0;
    }
    resultArray.unshift(plusResult);
    --point;
  }
  return [resultArray.join(''), step]
}

function addAnythingAsNumber(a, b){
  const number_a = Number(a);
  const number_b = Number(b);
  const string_a = String(a);
  const string_b = String(b);
  if((number_a && string_a.indexOf('.') !== -1) || (number_b && string_b.indexOf('.') !== -1)){
    const [intPartOfA, floatPartOfA] = string_a.split('.');
    const [intPartOfB, floatPartOfB] = string_b.split('.');
    const [floatPartOfSum, step] = addFloatPart(floatPartOfA, floatPartOfB);
    return Number([Number(intPartOfA) + Number(intPartOfB) + step, floatPartOfSum].join('.'));
  }
  return number_a + number_b;
}