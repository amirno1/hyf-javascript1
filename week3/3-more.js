"use strict";

function printObject(obj) {
    for (let property in obj) {
        console.log(property + " = " + obj[property]);
    }
}

const person = {
    firstName: "Amir",
    lastName: "Noshirwani",
    city: "Utrecht"
}

printObject(person);
