var express = require('express');
var router = express.Router();
var path = require('path');
var sql = require('../database/connect/maria')
/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public', 'index.html')); // 수정된 부분
  });



  router.get('/api/get/test', function(req, res){
    const obj={}
    let  code =  200   
     sql.query('select * from test_user',  function (error, result) {
        //console.log(result[0].userName)
        res.status(code).json(result);
    })
    
    // var [rows] = await sql.query('select * from test_user', [])
    // console.log(rows)
    //  res.status(code).json(data);
    
  })

  router.post('/api/post/test', function(req, res){
      res.status(200).json({
          "message":"call post api demo"
      })
  })
module.exports = router;
