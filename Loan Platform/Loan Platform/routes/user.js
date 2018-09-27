var express = require('express');
var router = express.Router();
var controller = require('../controllers/user');

router.post('/signup', function(req, res, next){

    controller.signup(req.body, res);
});




module.exports = router;