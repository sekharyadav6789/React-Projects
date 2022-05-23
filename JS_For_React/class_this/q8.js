//"use strict";
//you can't just create global variable ->
//you need explicitely define it
//in case of function this will become undefined

//console.log(this.window);
//message=10;
// message="fake Hello";
// window.message="fake Hello";
//console.log(message);
//q8 print the result
// message="fake Hello";
// const object={
//     message: 'Hello World',
//     logMessage: function(){
//         console.log(this.message);
//     }
// };
//call 1
// setTimeout(object.logMessage, 1000); //gets the winodow value

//call 2
// let fn=object.logMessage;
// setTimeout(fn,2000);     //gets the winodw value


//q9 correct the error in q8 and get the right answer

//call 3
// setTimeout(function outer(){
//     object.logMessage();
// },3000);                      //gets the object value

//call 4
// let boundFn=object.logMessage.bind(object)
// setTimeout(boundFn,4000);        //gets the object value by using bind
//q10 print the result
const obj={
    who:'World',
    greet(){
        return `Hello, ${this.who}!`;
    },
    farewell: ()=> {
        return `Goodbye, ${this.who}!`;
    }
};
console.log(obj.greet()); // Object value is logged
console.log(obj.farewell()); // window value is logged