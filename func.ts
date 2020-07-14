export {};
//fucntions in js
function add(num1, num2) {
  return num1 + num2;
}
//functions in ts
function add1(num1: number, num2: number) {
  return num1 + num2;
}

add1(5, 10);
console.log(add(5, 10));
//optional parameter
function add2(num1: number, num2?: number) {
  if (num2) return num1 + num2;
  else return num1;
  console.log(add2(5));
}
//*NOTE-Optional Parameter always have to come after required paramter
