exports.home=function(req,res){
  res.render('home');
};


exports.login=function(req,res){ 
    res.render('login');
};

exports.health = function (req, res) {
  res.status(200).send("OK");
};


