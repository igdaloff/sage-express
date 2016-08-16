var express = require('express');
var router = express.Router();
var stripe = require('stripe')(process.env.sk_test_b4NnPRLAemqyuxw6LhQS0Zwh);

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Sage Student Customers', customers: 'doug' });
});

module.exports = router;