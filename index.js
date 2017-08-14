'use strict';

// Import the interface to Tessel hardware
var tessel = require('tessel');
var router = require('tiny-router');
var drink = require('./drink.js');
var os = require('os');


router.addMimeType({ext:'.svg', mime:'image/svg+xml'});
router.addMimeType({ext:'.woff2', mime:'application/font-woff2; charset=UTF-8'});
router.addMimeType({ext:'.woff', mime:'application/font-woff'});
router.addMimeType({ext:'.ttf', mime:'application/x-font-ttf'});


router.use('static', {path: __dirname + '/public'});
router.use(function(req, res, next){
    //console.log('URL: ', req.url);
    next();
});

router.get("/make/drink/{drink}", function(req, res) {
  var recipe = req.body.drink;
  var time_needed = 10;

  console.log("fazendo " + recipe);

  var data = drink.mix(recipe);

  console.log(JSON.stringify(data));
  res.send(data)

});

router.listen(8080);

var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}

drink.init();
drink.mix("hifi")

console.log("Lunar Drink (tessel version) is ready on http://"+addresses[0]+":8080/");
