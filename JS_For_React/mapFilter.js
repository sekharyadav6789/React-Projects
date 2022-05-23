let arr=[1, 2, 3, 4, 5, 6, 7];
//pure and higher order function
function squarer(num){
    return num*num;
}
function quber(num){
    return num*num*num;
}
function filterOdd(num){
    return num%2 ==1;
}
// map-> calls it's cb fn on every element of the array and make a new array that has valued that returned by
// the cb function
let allElemsArr=arr.map(squarer);
console.log("squared Arr",allElemsArr);
allElemsArr=arr.map(quber);
console.log("cubed Arr", allElemsArr);
console.log("```````````````````````````````````````````````````");
// filter -> loops on the whole array an call it's test cb on every element and filter out the element on the
// basis of true or false
allElemsArr=arr.filter(filterOdd);
console.log("odd Arr", allElemsArr);
console.log("`````````````````````````````````````````````````````");
console.log(arr);