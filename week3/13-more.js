"use strict";

const bar = 42;
const result = typeof typeof bar;

//The type of bar will return "number" and the type of
//"number" is string
console.log(result);

