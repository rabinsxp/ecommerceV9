var router = require('express').Router();
var User = require('../models/user');

router.get('/',function(req,res){
  if(req.session.user == undefined){
    res.render('main/shop-single-bag',{useremail:"User"});
  }
    else{
    User.findOne({ email: req.session.user.email }, function (err, user) {
      res.render('main/shop-single-bag',{useremail:req.session.user.email});
    })
  }
});

module.exports = router;