"use strict";

function advertisement() {
    let lastElement = vehicles.pop();
    //pop will remove the last element and we assign that removed element to lastElement
    const vehiclesPlural = vehicles.map(i => i + "s");
    //map will add a "s" at the end of every one of array elements
    console.log("Amazing Amir's Garage, we service " + vehiclesPlural.toString().replace(/,/g, ", ") + " and " + lastElement + "s.");
    //toString convert the array to string and replace ,replaces the commas globally to ", "
}

let vehicles = ["motorbike", "caravan", "car", "bike"];



advertisement();