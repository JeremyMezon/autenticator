var express = require('express');
const { Auth } = require('../controller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/auth', function(req, res) {
  Auth.hasAuth(req,res);
});

module.exports = router;
