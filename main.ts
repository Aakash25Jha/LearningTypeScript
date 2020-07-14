export {};
let message = "Welcome Back";
console.log(message);

let x = 100;
let y;
const x1 = 100;
//const y1; Can't because const has to initilaized at always.

let isBeginner: boolean = true;
//put a ':' and datatype to define the cariable datatype

let total: number = 0;
let name: string = "aakash";

//Template strings
let sentence: string = `My name is ${name}
I am a beginner in TypeScript`;

console.log(sentence);

let n: null = null; //subtye of all other types
let u: undefined = undefined; //subtype of all other types

//Read difference between Null and Undefined
//***********************************************************************
//Learning Arrays
let list1: Array<number> = [1, 2, 3];
let list2: number[] = [1, 2, 3];
let list3: string[] = ["aakash", "yash", "vishal"];

let person1: [string, number] = ["aakash", 22]; //fixed=1 string 1 number
//let person2:[string[],number[]]=['aakash','yash',21,22]//*not possible*\

//Learning enum
enum colour {
  red,
  green,
  blue,
}
let c: colour = colour.red;

console.log(c);
//enum begin with value 0, but you can assign numbers to the values inside enum
enum colour1 {
  black = 7,
  magenta,
  purple,
}
let c1: colour1 = colour1.magenta;
console.log(c1);
