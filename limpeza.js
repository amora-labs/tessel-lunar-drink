var drink = require('./drink.js');

drink.init();

var arr = [0, 1, 2, 3];
function cycle() {
    var p1 = arr.shift();
    drink.turnPumpOnForSeconds(p1,40);
    arr.push(p1);
}


cycle();
console.log('Press any key to exit');

setInterval(function () {
    console.log("bip");
    cycle()
},43000);
