// 1)problem
// function addTwo(num) { // -> function addTwo(num: any): any
//   num.toUpperCase();
//   return num + 2;
// }

// addTwo(5);

// 2 problem)
// if we write addTwo("5")// -> it still works
// export {}; //used to fixed error temporary

// solution
function addTwo(num) {
  return num + 2;
}
addTwo(5);

function getUpper(val: String) {
  return val.toUpperCase();
}
getUpper("jatin");

// function signUpUser(name, email, password); -> wrong method
function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser("jatin", "jatin@mail", false);

//Arrow function
let LoginUser = (name: string, email: string, isPaid: boolean) => {};

LoginUser("h", "jatin@mail", false);
export {};
