var tessel = require('tessel');

var drink = {
    busy: false,
    recipes: {
        maitai: [60, 0, 120, 0],
        cubalibre: [70, 120, 0, 0],
        hifi: [0, 0, 120, 70],
        moskvasvobodno: [0, 120, 0, 70],
        teste: [5, 0, 0, 0]
    },
    pumps: [
        tessel.port.B.pin[0],
        tessel.port.B.pin[1],
        tessel.port.B.pin[2],
        tessel.port.B.pin[3]
    ],
    setBusyFor: function(time) {
        drink.busy = true;
        setTimeout(function() {
            console.log("--- pronta para outro drink! ---");
            drink.busy = false;
        },time * 1000);
    },
    timeForRecipe: function(recipe) {
        return drink.recipes[recipe].reduce(function(p, c) {
            return p + c;
        },0);
    },
    turnPumpOn(number) {
        console.log("Ligando bomba #"+number);
        tessel.port.B.pin[number].write(0, function(error, buffer) {
            if (error !== undefined) {
                return error;
            }

            return true;
        });
    },
    turnPumpOff(number) {
        console.log("Desligando bomba #"+number);        
        tessel.port.B.pin[number].write(1, function(error, buffer) {
            if (error !== undefined) {
                return error;
            }

            return true;
        });
    },
    turnPumpOnForSeconds(number, seconds) {
        console.log("Ligando bomba #"+number + " por " + seconds + " segundos");        
        var status = drink.turnPumpOn(number);
        
        if (!status) {
            console.log("--- Problema com a bomba #" + number + ": " + status + " ---");
            return status
        }

        setTimeout(function() {
            status = drink.turnPumpOff(number);

            if (!status) {
                throw status
            }
        }, seconds * 1000);

        return true;
    },
    mix: function(recipe) {
        if (drink.busy) {
            return {
                status: "erro",
                msg: "Ocupada fazendo drinks"
            }
        }

        drink.recipes[recipe].map(function(seconds, pump) {
            if (seconds > 0) {
                drink.turnPumpOnForSeconds(pump, seconds)
            }
        });

        var time = drink.timeForRecipe(recipe)
        drink.setBusyFor(time);

        return {
            time: time,
            status: "ok",
            msg: "Fazendo " + recipe
        }
    }
}

module.exports = drink;