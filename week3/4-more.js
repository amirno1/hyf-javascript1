"use strict";

function vehicleType(color, code) {
    if (code === 1) {
        console.log("a " + color + " car");
    } else if (code === 2) {
        console.log("a " + color + " motorbike");
    } else {
        console.log("unknown vehicle");
    }
}


vehicleType("green", 1);

vehicleType("blue", 2);

vehicleType("red", 3);