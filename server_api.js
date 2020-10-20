const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.static(__dirname));

app.get('/getFile/:fileName', (req, res)=>{
  fs.readFile(req.params.fileName, (error, data)=>{
    if(error){
      res.status(404).send('no such file');
    }else{
      res.send(data);
    }
  })
})

app.listen(3001, ()=>{console.log('server start at 3001')});
