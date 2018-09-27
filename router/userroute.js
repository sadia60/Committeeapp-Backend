var express = require('express'); 
var router = express.Router();

var user_controller=require('../controller/usercontroller.js')
// var signup_controller=require('../controller/signupcontroller.js')
// var print_controller=require('../controller/printcontroller')

router.post('/login',function(req,res,next){
    // req.session.user = {email:"majid"}
    // return res.json(req.session)
    user_controller.login1(req,res);

});

router.get('/printuser',function(req,res,next){
    user_controller.printuser(req,res);

})
router.post('/user_details',function(req,res,next){
    user_controller.user_details(req,res);

})
router.post('/signup',function(req,res,next){
    user_controller.signup(req,res);

})
router.post('/verify',function(req,res,next){
    user_controller.verify(req,res);

})

router.post('/deleteuser',function(req,res,next){
    user_controller.delete(req,res);

})


module.exports=router;