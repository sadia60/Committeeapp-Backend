var express = require('express');
var router = express.Router();
var controller = require('../controllers/request');

router.post('/req', function(req, res, next){

    controller.savereq(req.body, res);
});




module.exports = router;