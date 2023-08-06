"use strict";
// 1)problem
// function addTwo(num) { // -> function addTwo(num: any): any
//   num.toUpperCase();
//   return num + 2;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// addTwo(5);
// 2 problem)
// if we write addTwo("5")// -> it still works
// export {}; //used to fixed error temporary
// solution
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("jatin");
// function signUpUser(name, email, password); -> wrong method
function signUpUser(name, email, isPaid) { }
signUpUser("jatin", "jatin@mail", false);
//Arrow function
var LoginUser = function (name, email, isPaid) { };
LoginUser("h", "jatin@mail", false);
