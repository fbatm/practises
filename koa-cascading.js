const Koa = require('koa');
const app = new Koa();
const express = require('express');
const expressApp = new express();

app.use(async function (ctx, next) {
  console.log(1)
  await next();
  console.log(11)
});

app.use(async function (ctx, next) {
  console.log(2)
  await Promise.resolve().then(()=>{
  	console.log(22)
  })
  next();
  console.log(21)
});

app.use(ctx => {
	console.log(3)
  ctx.body = 'Hello World';
  console.log(31)
});

app.listen(3000);

/**************************************************/

expressApp.use(async function (req, res, next) {
  console.log(1)
  await next();
  console.log(11)
});

// logger

expressApp.use(async function (req, res, next) {
  console.log(2)
  await Promise.resolve().then(()=>{
  	console.log(22)
  })
  next();
  console.log(21)
});

// response

expressApp.use((req, res, next) => {
	console.log(3)
  res.body = 'Hello World';
  res.send();
  console.log(31)
});
expressApp.listen(3001);