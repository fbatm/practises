const operatorReg = /add|sub|mul|div/;
function cal(op, a, b) {
  switch (op) {
    case 'add':
      return Number(a) + Number(b);
    case 'sub':
      return a - b;
    case 'mul':
      return a * b;
    case 'div':
      return b == 0 ? 'error' : Math.floor(a / b)
  }
}
function calAble(stack) {
  const len = stack.length
  if (!operatorReg.test(stack[len - 1]) && !operatorReg.test(stack[len - 2]) && operatorReg.test(stack[len - 3])) {
    return true;
  }
}
function getNextStr(str, pos) {
  if (str[pos] === '(' || str[pos] === ')') {
    return [str[pos], pos + 1];
  } else if (pos < str.length) {
    let s = '';
    while (str[pos] === ' ') {
      pos++;
    }
    if (str[pos] === '(' || str[pos] === ')') {
      return [str[pos], pos + 1];
    }
    while (str[pos] !== ' ') {
      s += str[pos++];
    }

    return [s, pos];
  }
  return [];
}
function f(line) {
  let pos = 0;
  const stack = [];
  const [item, newpos] = getNextStr(line, pos++);
  stack.push(item)
  pos = newpos;
  let result;
  while (stack.length && result !== 'error') {
    const [nextOpStr, newpos] = getNextStr(line, pos++);
    pos = newpos;
    if (nextOpStr === ')') {
      const arg2 = stack.pop();
      const arg1 = stack.pop();
      const op = stack.pop();
      result = cal(op, arg1, arg2);
      if (result === 'error') {
        break;
      }
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        stack.push(result);
      }
    } else if (nextOpStr) {
      stack.push(nextOpStr)
    }
  }
  console.log(result);
}
f('(div 12 (sub 45 45))');