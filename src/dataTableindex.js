var express = require('express');
// DataBase 
var mysql = require("mysql");
var bodyParser = require('body-parser');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "rankData"
});

con.connect(function(err) {
    if (err) {
        console.log('connecting error');
        return;
    }
    console.log('connecting success');
});

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function (req, res) {
  res.send('hello world');
})

///hello/peter就會取到peter，/hello/efefef就會取到efefef

app.get('/hello/:name', function (req, res) {
  res.send('GOOOOOOOOOD' + req.params.name);
})

// 新增RANK
app.post('/rankAdd', function (req, res, next) {
  console.log(req.body);

  var sql = {
      rank: req.body.degree,
      systemUser: req.body.empno,
  };
  
  console.log(sql);
  var qur = con.query('INSERT INTO rankrecord SET ?', sql, function (err, rows) {
      if (err) {
          console.log(err);
      }else{
        res.setHeader('Content-Type', 'application/json');
        res.send(req.body);
      }
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
