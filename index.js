'use strict';

// Import the interface to Tessel hardware
var tessel = require('tessel');
var router = require('tiny-router');


router.addMimeType({ext:'.svg', mime:'image/svg+xml'});
router.addMimeType({ext:'.woff2', mime:'application/font-woff2; charset=UTF-8'});
router.addMimeType({ext:'.woff', mime:'application/font-woff'});
router.addMimeType({ext:'.ttf', mime:'application/x-font-ttf'});


router.use('static', {path: __dirname + '/public'});
router.use(function(req, res, next){
    console.log('URL: ', req.url);
    next();
});

router.get("/make/drink/{drink}", function(req, res) {
  var drink = req.body.drink;
  var time_needed = 10;

  console.log("making " + drink);

  res.send({
    status: "ok", 
    msg: "Fazendo " + drink + "...", 
    time: time_needed
  })

});

router.listen(8080);

console.log("Router is ready on 8080");
