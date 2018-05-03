"use strict";

let vehicles = ["car", "motorbike", "caravan", "bike"];

function vehicleType(color, code, age) {
    const condition = age <= 1 ? " new " : " used ";
    if (code === 1) {
        console.log("a " + color + condition + vehicles[0]);
    } else if (code === 2) {
        console.log("a " + color + condition + vehicles[1]);
    } else if (code === 3) {
        console.log("a " + color + condition + vehicles[2]);
    } else if (code === 4) {
        console.log("a " + color + condition + vehicles[3]);
    } else {
        console.log("unknown vehicle");
    }
}

vehicleType("green", 1, 3);

vehicleType("blue", 2, 1);

vehicleType("red", 3, 5);

vehicleType("gray", 2, 5);

vehicleType("black", 5, 0);

vehicleType("khaki", 4, 3);

