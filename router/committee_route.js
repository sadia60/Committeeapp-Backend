var express=require('express');
var router=express.Router();
var committee_controller=require('../controller/committee_controller')
router.post('/create_committee',function(req,res,next){
    
    committee_controller.create_com(req,res)
})
router.post('/print_committee',function(req,res,next){
    
    committee_controller.print_com(req,res)
})
router.post('/search_committee',function(req,res,next){
    
    committee_controller.search_com(req,res)
})
router.post('/join_committee',function(req,res,next){
    
    committee_controller.join_com(req,res)
})
router.post('/committee_details',function(req,res,next){
    
    committee_controller.committe_details1(req,res)
})
router.get('/join_print',function(req,res,next){
    
    committee_controller.join_print(req,res)
})
router.post('/list_members',function(req,res,next){
    
    committee_controller.list_members(req,res)
})
router.post('/print_join',function(req,res,next){
    
    committee_controller.print_join(req,res)
})
router.post('/notification',function(req,res,next){
    
    committee_controller.notification(req,res)
})
router.post('/join_verify',function(req,res,next){
    
    committee_controller.join_com1(req,res)
})
module.exports=router;