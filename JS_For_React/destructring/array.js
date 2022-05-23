let arr=["Jasbir","Singh","24","Indian"];
//let [name, lastName, , Nationality]=arr;    //let name=arr[0]  let lastName=arr[1]  let Nationality=arr[3]
// console.log(name);
// console.log(lastName);
// console.log(Nationality);

//let [name="Steve", lastName="rogers", age, ,mentor="Web"]=arr; //values in the array do not change
// console.log(name);
// console.log(lastName);
// console.log(age);
// console.log(mentor);

// let [name="Steve", lastName="rogers", age, ,mentor="Web"]=[];
// console.log(name);
// console.log(lastName);
// console.log(age);
// console.log(mentor);

//objects
let person={ name: "Steve", country: "Los Angeles",job: "Avenger" };
// console.log("name",person.name);
// console.log("country",person.country);
// console.log("job",person.job);
// console.log("abc", person.abc);

//get a key's value into a variable
// let {name, country, abc}=person;
// console.log(name+" ",country+" "+abc);

//default value can also be given
// there is no order hashmap has used in the back
//let {name, country, abc="hello"}=person;
//console.log(name+" ",country+" "+abc);

//Alias
let {name, country:Nationality, abc="hello"}=person;
console.log(Nationality);