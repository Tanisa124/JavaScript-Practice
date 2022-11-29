"use strict";
// Dynamic Types
let age = 25;
age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'thaen' };
console.log(age);
let mixed = [];
mixed.push(5);
mixed.push('mario');
mixed.push(true);
console.log(mixed);
// How dynamic type can cause trouble
let ninja;
ninja = { name: 'yoshi', age: 25 };
console.log(ninja);
ninja = { name: 25, age: 'yoshi' };
console.log(ninja);
