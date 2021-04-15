function isPrim(number){
  if(number != 2 && number % 2 === 0){
    return false;
  }
  const edge = Math.sqrt(number);
  for(let i = 3;i <= edge;i += 2){
    if(number % i === 0){
      return false;
    }
  }
  return true;
}

function getPrimNumbers(num){
  if(isNaN(num) || num % 2 !== 0|| num < 6 || num > 65535){
    return 0;
  }
  const results = [];
  let edge = num / 2;
  if(edge % 2 === 0){
    edge += 1;
  }
  for(let i = edge;i >= 1;i -= 2){
    if(isPrim(i) && isPrim(num - i)){
      results[0] = i;
      results[1] = num - i;
      break;
    }
  }
  return results.join(' ');
}
console.log(getPrimNumbers(144))
// console.log(isPrim(169))