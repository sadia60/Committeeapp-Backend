var express=require('express');
var router=express.Router();
var payment_controller=require("../controller/payment_controller");

router.post('/pay',function(req,res,next){
    
payment_controller.pay(req,res)
})
router.post('/print_account',function(req,res,next){
    
    payment_controller.print_account(req,res)
    })

module.exports=router;