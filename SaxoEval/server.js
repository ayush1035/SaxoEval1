const express = require('express');
const webpack = require('webpack');
var fs = require('fs');
var bp = require('body-parser');


var cors = require('cors');

var app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(cors())
app.get('/getData', function (req, res) {
  fs.readFile('serverData/data.json', 'utf-8', function (err, data) {
    res.send(JSON.parse(data));
  });
});

app.post('/postData', function (req, res) {
  let fileData;


  fs.readFile('serverData/data.json', 'utf-8', function (err, data) {
    fileData = JSON.parse(data);
    let editData = req.body;
    for (let i = 0; i < fileData.length; i++) {
      if (editData.id == fileData[i].id) {
        fileData[i] = editData;
        break;
      }
    }
    fs.writeFile('serverData/data.json', JSON.stringify(fileData), function (err) {
      if (err)
        return console.log(err);
      console.log('Done');
    })
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});