class Person {
    constructor (name,age){
        this.name=name;
        this.age=age;
    }
    getDetails(){
        console.log(this);
        //console.log(`His Name is ${this.name} and age is ${this.age}`);
    }
    setDetails(newName, newAge){
        this.name=newName;
        this.age=newAge;
    }
}
let binod= new Person("Binod",23);
// binod.getDetails();
// binod.setDetails("Ravi",24);
// binod.getDetails();

//window
// document.querySelector("button")
// .addEventListener("click",binod.getDetails);
//window
// setTimeout(binod.getDetails, 1000);

//undefined we cannot call like this.
// let fn=binod.getDetails;
// fn();

let btn1=document.querySelector(".btn1")
let btn2=document.querySelector(".btn2")
//event listener -> pass
btn1.addEventListener("click",binod.getDetails);
btn2.addEventListener("click",binod.getDetails);