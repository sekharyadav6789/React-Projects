//Functional Programming
//pure function -> cannot change the value of the outer variable
// if it need a variable then it will take it as an argument and change copy of it for a given input it should 
//always give the same output
// a function as an input or return a function as an output
//Hof -> are function that takes a function as an input or return a function as an output
// functions are first class citizens -> functions are treated as a variable
let a=10;
function pureFn(a){
    a++;
    return a;
}
console.log(pureFn(a));
console.log(a);