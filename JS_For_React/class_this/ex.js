//Example 1
/*name="Alien"
let obj={
    name: "Steve",
    //functions of an object are known as methods
    saysHi: function(){
        console.log(obj.name, "say's Hi");
        //console.log(this==window, "say's Hi");
        console.log(this.name, "say's Hi");
    }
}
//this keyword-> on the basis of call
//call base pe hi define hota hai
//method call-> this would take current object
obj.saysHi();
let fn=obj.saysHi;
//console.log(window);
//window
//function call -> this window
//console.log(fn());
fn();*/

//Example 2
/*name="Alien"
let obj={
    name: "Steve",
    saysHi: function(){
        console.log(obj.name, "say's Hi");
        function inner(){
            console.log(this.name, "say's Hi");
        }
        inner(); //this value is assigned during run time for this inner function so it takes Alien
    }
        
}

obj.saysHi();*/

//Example 3
/*name="Alien"
let obj={
    name: "Steve",
    saysHi: function(){
        console.log(obj.name, "say's Hi");
        function inner(){
            console.log(this.name, "say's Hi");
        }
        this.inner(); //this.inner calls the obj inner function
    },
    inner:function(){
        console.log("fake");
    }
        
}

obj.saysHi();*/

//Example 4
// name="Alien"
// let obj={
//     name: "Steve",
//     saysHi: function(){
//         console.log(obj.name, "say's Hi");
//         let that=this; //that take the obj value coz it is called as method obj
//         function inner(){
//             console.log(that.name, "say's Hi");
//         }
//         inner(); //this.inner calls the obj inner function
//     }  
// }

// obj.saysHi();

//Example 5
// name="Alien"
// let obj={
//     name: "Steve",
//     saysHi: function(){
//         console.log(obj.name, "say's Hi");
//         let that=this; //that take the window's value coz it is called as function fn
//         function inner(){
//             console.log(that.name, "say's Hi");
//         }
//         inner(); //this.inner calls the obj inner function
//     }  
// }

// let fn=obj.saysHi;
// fn();

// //Example 6
// name="Alien"
// let obj={
//     name: "Steve",
//     saysHi: function(){
//         console.log(this.name, "say's Hi"); //this takes window value
//         //It does not have it's this -> outer function
//         const inner=()=>{
//             console.log(this.name, "say's Hi"); //this takes window value
//         }
//         inner();
//     }  
// }
// let fn=obj.saysHi;
// fn();

// //Example 7
// name="Alien"
// let obj={
//     name: "Steve",
//     saysHi: ()=>{
//         console.log(this.name, "say's Hi"); //this takes window value
//         //It does not have it's this -> outer function
//         const inner=()=>{
//             console.log(this.name, "say's Hi"); //this takes window value
//         }
//         inner();
//     }  
// }
// obj.saysHi();

// //Example 8
// name="Alien"
// let obj={
//     name: "Steve",
//     saysHi: 
//     function (){
//         const subOuter =()=>{
//             console.log(this.name,"say's Hi");

//             const inner =() => {
//                 console.log(this.name,"say's Hi");
//             }

//             inner();
//         }
//         subOuter();
//     }  
// }
// obj.saysHi();

// //Example 9
// name="Alien"
// let obj={
//     name: "Steve",
//     saysHi: 
//     function (){
//         const subOuter =()=>{
//             console.log(this.name,"say's Hi");

//             const inner =() => {
//                 console.log(this.name,"say's Hi");
//             }

//             inner();
//         }
//         subOuter();
//     }  
// }
// let fn=obj.saysHi;
// fn();

//1. this is everytime decided on the basis of call
//2. Normal function
            // method call -> this current object to whom you belong to
            // function call -> window object
            //strict mode function call -> undefined
//3. Arrow function -> 
            //2nd rule is not applicable for arrow function
            //I don't have my own this -> I will take it from outside
//bind function -> if you want to always pass some object as this whenever a function is called

// //Example 10
// name="Alien"
// let obj={
//         name: "Steve",
//         saysHi: 
//         function (){
//             console.log(this.name,"say's Hi");
//             // arrow does not have
//             // it's own this it take this from outer function
//         function subOuter(){
//             console.log(this.name,"say's Hi");
//         }
//         let boundFn=subOuter.bind(obj);
//         boundFn();
//     }  
// }
// obj.saysHi();

//Example 11
name="Alien"
let obj={
        name: "Steve",
        saysHi: 
        function (){
            console.log(this.name,"say's Hi");
            // arrow does not have
            // it's own this it take this from outer function
        function subOuter(){
            console.log(this.name,"say's Hi");
        }
        //make a copy of subOuter fn and declare this with obj.
        let boundFn=subOuter.bind(obj);
        boundFn();
    }  
}
let fn=obj.saysHi;
fn();