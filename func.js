"use strict";
exports.__esModule = true;
//fucntions in js
function add(num1, num2) {
    return num1 + num2;
}
//functions in ts
function add1(num1, num2) {
    return num1 + num2;
}
add1(5, 10);
console.log(add(5, 10));
//optional parameter
function add2(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
    console.log(add2(5));
}
//*NOTE-Optional Parameter always have to come after required paramter
//Learning Interface
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = { firstName: "Bruce", lastName: "Wayne" };
fullName(p);
function newFullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
//you can also make paramater as option in Interfaces
