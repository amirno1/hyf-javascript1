"use strict";

const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;


x === y ? console.log("true") : console.log("false");//expected output false
x == y ? console.log("true") : console.log("false");//expected output false
z === y ? console.log("true") : console.log("false");//the result will be true
z === x ? console.log("true") : console.log("false");//the result will be false