console.log("HELLO WORLD")
console.warn("HELLO WORLD")
console.error("HELLO WORLD")


var a = 10;
console.log(a);
var a ="Name"
console.log(a);

//  let name = "John"
//  console.log(name)
//  let name

const pi = 3.14;
console.log(pi)
// const pi = 3.14

let valueone = "1";
let valuetwo = "a";

console.log(valueone + valuetwo);

console.log(valueone + parseInt(valuetwo));


const name = "John";
const age = "30";
const rating = "4.5";
const isCool = "True";
const x = "Null";
var y;

 console.log(typeof name);
 console.log('My name is ' + name + 'and i am' + age);
 console.log(`My name is  ${name}  and i am  ${age} `);


 // Array

 arrayOne = ["John" ,30, true,null, undefined]

 console.log(arrayOne);

 arrayOne.push("Apple");
 console.log(arrayOne)


 arrayOne.pop();
 console.log(arrayOne);

arrayOne.unshift("Mango");
console.log(arrayOne);

console.log(arrayOne[0]);

arrayOne[3]="banana"
console.log(arrayOne);

console.log(arrayOne.length);

arrayOne.splice(3,1);
console.log(arrayOne);

let valueOnee = "2"
let valueTwoo = 2;

console.log(valueOnee == valueTwoo);
console.log(valueOnee === valueTwoo);

let value = 17;

if(value>=18){
    console.log("adult");
}
else{
    console.log("minor");
}


let year = 20;

let type = (year >= 18) ? "Adult" : "minor"
console.log(type);
