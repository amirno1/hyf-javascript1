"use strict";

const o1 = { foo: 'bar' };
const o2 = { foo: 'bar' };
const o3 = o2;

console.log('o1', o1, 'o2', o2, 'o3', o3);

o1.foo = 'baz';
console.log('o1', o1, 'o2', o2, 'o3', o3);

o2.foo = 'hyf';
console.log('o1', o1, 'o2', o2, 'o3', o3);

//Changing o1 does not effect o3 because it is not assigned to it
//Changing o2 tough is the other way around , in line 5 o2 is assigned to o3 so changing o2 will also change o3