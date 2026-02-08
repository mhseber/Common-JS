// JavaScript is a dynamically typed language, which means that variables can hold values of any type without explicit type declaration. The type of a variable can change at runtime based on the value assigned to it.

//data types in JavaScript include:
// 1. Primitive types: string, number, boolean, null, undefined, symbol, bigint
// 2. Object types: objects, arrays, functions

let data = 4;
data = "Hello World";
data = true;
data = null;
data = {name: "seber", age: 25};
console.log(typeof data);


// js: primitive data type
const price = 400;
const name = "seber";
const isAvailable = true;
const emptyValue = null;
const notDefined = undefined;
const uniqueId = Symbol("id");
const bigNumber = 9007199254740991n;

// non primitive data type
const person = {
    name: "seber",
    age: 25,
    isStudent: true
};
const numbers = [1, 2, 3, 4, 5];