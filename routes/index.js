var express = require('express');
var router = express.Router();
var slowService = require('../services/slowService');

/* GET home page. */
router.get('/', function(req, res) {
  slowService().then(function () {
    res.render('index', { title: 'Node performance debug site' });
  });
});

module.exports = router;
