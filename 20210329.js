for(var i = 0;i<5;i++){
  setTimeout((function(n){
    console.log(n)
  })(i));
}

const a = [[3, 9, 2,4], [99, 32, 5, 7,3], [6, 3,12,45,9, [11, 8, [22,15, 313, [44] ] ] ], 10, [99,32]]
function flatternAndUniq(arr){
  var memo = {};
  function recursion(originalArr){
    for(let v of originalArr){
      if(Array.isArray(v)){
        recursion(v);
      }else{
        memo[v] = true;
      }
    }
  }
  recursion(arr);
  return Object.keys(memo)
}
// 仅2层时
function flatternAndUniqWithSet(arr){
  return arr.reduce((lastResult, currentArray)=>[...new Set(lastResult.concat(currentArray))], [])
}


const A = [{id:2, parentId: 1},{id: 1},  {id: 3, parentId: 2}, {id: 5, parentId: 4},{id: 4}]

const B = [{id: 1, child: [{id: 2, parentId: 1, child: [{ id: 3, parentId: 2}]}]}, {id: 4, child: [{id: 5, parentId: 4}]}];


function getTree(arr){
  const roots = [];
  const globalMemo = {};
  for(const node of arr){
    globalMemo[node.id] = node;
  }
  Object.values(globalMemo).forEach(node => {
    if(!node.parentId){
      roots.push(node);
    }else{
      globalMemo[node.parentId].child = (globalMemo[node.parentId].child || []).concat(node);
    }
  });
  return roots;
}

function getTreeOnce(arr){
  const roots = [];
  const memo = {};
  for(const v of arr){
    const node = {...v};
    if(node.parentId){
      if(memo[node.parentId]){
        memo[node.parentId].child = (memo[node.parentId].child || []).concat(node);
      }else{
        memo[node.parentId] = {child: [node], dummy: true};
      }
    }else{
      if(memo[node.id] && memo[node.id].dummy){
        node.child = memo[node.id].child;
      }
      memo[node.id] = node;
      roots.push(node)
    }
    memo[node.id] = node;
  }
  return roots;
}

function genRandomNumeric(){
  // Math.random() * 100 >> 0
  return parseInt(Math.random() * 100);
}

function genRandomArray(n){
  const result = new Array(n);
  for(let i = 0;i<n;i++){
    result[i] = genRandomNumeric();
  }
  return result;
}

function groupByHightLevel(arr){
  const memo = {};
  for(const v of arr){
    const key = parseInt(v/10);
    if(!memo[key]){
      memo[key] = [];
    }
    memo[key].push(v);
    
  }
  return Object.values(memo);
}