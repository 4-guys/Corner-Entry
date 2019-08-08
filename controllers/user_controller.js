var express = require("express");
var router = express.Router();

var user = require ("../models/user.js");

router.post("/", function (req,res){
    user.create(req.body.firstName,function(result){
        console.log(result);
        
    })
})

module.exports = router;