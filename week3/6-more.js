"use strict";

function vehicleType(color, code, age) {
    const condition = age <= 1 ? "new" : "used";
    if (code === 1) {
        console.log("a " + color + " " + condition + " car");
    } else if (code === 2) {
        console.log("a " + color + " " + condition + " motorbike");
    } else {
        console.log("unknown vehicle");
    }
}


vehicleType("green", 1, 3);

vehicleType("blue", 2, 1);

vehicleType("red", 3, 5);

vehicleType("gray", 2, 5);

vehicleType("black", 1, 0);