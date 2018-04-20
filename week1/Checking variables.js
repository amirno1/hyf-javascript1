"use strict";

let age = 26;

console.log(age);

let name = "Amir";

console.log(name);

let months = ["April","June","July"];

console.log(months);

let isMale = true;

console.log(isMale);

let year = 2018;

console.log(year);


console.log("The type of age is number" + typeof age);

console.log("The type of name is  string" + typeof name);

console.log("the type of months is object" +  typeof months);

console.log("The type of isMale is boolean" + typeof isMAle);

console.log("The type of year is number" + typeof year);

if (typeof age == typeof name){
    console.log("SAME TYPE");
} else {
    console.log("NOT THE SAME TYPE");
}

if (typeof age == typeof months){
    console.log("SAME TYPE");
} else {
    console.log("NOT THE SAME TYPE");
}
if (typeof age == typeof isMale){
    console.log("SAME TYPE");
} else {
    console.log("NOT THE SAME TYPE");
}
if (typeof age == typeof year){
    console.log("SAME TYPE");
} else {
    console.log("NOT THE SAME TYPE");
}
if (typeof name == typeof months){
    console.log("SAME TYPE");
} else {
    console.log("NOT THE SAME TYPE");
}
if (typeof name == typeof isMale){
    console.log("SAME TYPE");
} else {
    console.log("NOT THE SAME TYPE");
}
if (typeof name == typeof year){
    console.log("SAME TYPE");
} else {
    console.log("NOT THE SAME TYPE");
}
if (typeof months == typeof isMale){
    console.log("SAME TYPE");
} else {
    console.log("NOT THE SAME TYPE");
}
if (typeof months == typeof year){
    console.log("SAME TYPE");
} else {
    console.log("NOT THE SAME TYPE");
}
if (typeof isMale == typeof year){
    console.log("SAME TYPE");
} else {
    console.log("NOT THE SAME TYPE");
}

