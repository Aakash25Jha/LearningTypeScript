"use strict";
exports.__esModule = true;
var message = "Welcome Back";
console.log(message);
var x = 100;
var y;
var x1 = 100;
//const y1; Can't because const has to initilaized at always.
var isBeginner = true;
//put a ':' and datatype to define the cariable datatype
var total = 0;
var name = "aakash";
//Template strings
var sentence = "My name is " + name + "\nI am a beginner in TypeScript";
console.log(sentence);
var n = null; //subtye of all other types
var u = undefined; //subtype of all other types
//Read difference between Null and Undefined
//***********************************************************************
//Learning Arrays
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var list3 = ["aakash", "yash", "vishal"];
var person1 = ["aakash", 22]; //fixed=1 string 1 number
//let person2:[string[],number[]]=['aakash','yash',21,22]//*not possible*\
//Learning enum
var colour;
(function (colour) {
    colour[colour["red"] = 0] = "red";
    colour[colour["green"] = 1] = "green";
    colour[colour["blue"] = 2] = "blue";
})(colour || (colour = {}));
var c = colour.red;
console.log(c);
//enum begin with value 0, but you can assign numbers to the values inside enum
var colour1;
(function (colour1) {
    colour1[colour1["black"] = 7] = "black";
    colour1[colour1["magenta"] = 8] = "magenta";
    colour1[colour1["purple"] = 9] = "purple";
})(colour1 || (colour1 = {}));
var c1 = colour1.magenta;
console.log(c1);
