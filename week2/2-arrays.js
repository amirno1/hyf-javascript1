"use strict";

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

favoriteAnimals.push("turtle");

console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, "meerkat");

// array.splice (place item , remove item(s), "new item");

console.log("The array would be : [ 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle' ]");


console.log(favoriteAnimals);

console.log("The array has a length of:" + favoriteAnimals.length);

favoriteAnimals.splice(3, 1);

// deleting "giraffe" from the array

console.log(favoriteAnimals);

console.log("The item you are looking for is at index:" + " " + favoriteAnimals.indexOf("meerkat"));
