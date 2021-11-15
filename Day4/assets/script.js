// Printing statement 

console.log("welcome to javascript")


//ways to create variables
// 1.Using Var
var a=10;
console.log(a);

// 2.Using let
let b=20;
console.log(b);

// 3.using const
const c=30;
console.log(c);


// 1. Primitive Data Types
//Number
var a=10;
console.log('value of a is',a);
console.log('type of a is: ' , typeof a);

//String
var s='javascript'
console.log('value of s is',s);
console.log('type of b is: ', typeof s);

//null
var n=null;
console.log('value of n is',n);
console.log('type of a is: ',typeof n);

//undefined
var u;
console.log('value of u is',u);
console.log('type of u is: ',typeof u);

//boolean
let bool=true;
console.log('value of bool is',bool);
console.log('type of b is: ',typeof bool);



// 2. Non Primitive Data Types

//array

var arr=['kashi','jadhav','vijay',10];
console.log(arr[1]);
console.log(arr[0]);
console.log('type of kashi is',typeof arr[1]);
console.log('type of 10 is',typeof arr[3]);


//Object
let obj = {

    Name: "Kashinath",
    age: 24,

}

console.log(obj);
console.log('type of obj is: ',typeof obj)

console.log('name is',obj.Name);
console.log('age is',obj.age);


