Promise.resolve()
.then(()=>{
    console.log('外1 then');
    new Promise((resolve)=>{
        console.log('内promise');
        resolve();
    })
    .then(()=>{
        console.log('内1 then');
        return Promise.resolve();
    })
    .then(()=>{
        console.log('内2 then');
        return Promise.resolve();
    })
    .then(()=>{
        console.log('内3 then');
    })
    .then(()=>{
        console.log('内4 then');
    })
})
.then(()=>{console.log('外2 then')})
.then(()=>{console.log('外3 then')})
.then(()=>{console.log('外4 then')})
.then(()=>{console.log('外5 then')})
.then(()=>{console.log('外6 then')})
.then(()=>{console.log('外7 then')})
.then(()=>{console.log('外8 then')})

console.log('##########################################')

new Promise((resolve, reject) => {
  console.log("外部promise");
  resolve();
})
.then(() => {
    console.log("外部第一个then");
    new Promise((resolve, reject) => {
        console.log("内部promise");
        resolve();
    })
    .then(() => {
        console.log("内部第一个then");
    })
    .then(() => {
        console.log("内部第二个then");
    });
    return new Promise((resolve, reject) => {
        console.log("内部promise2");
        resolve();
    })
    .then(() => {
        console.log("内部第一个then2");
    })
    .then(() => {
        console.log("内部第二个then2");
    });
})
.then(() => {
    console.log("外部第二个then");
});
console.log('##########################################')