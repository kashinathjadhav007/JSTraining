//array Reverse without Method

var arr=['kashi','jadhav',5];

for (let i = arr[arr.length-1]; i >=0; i--) {
   console.log(arr[i]);
  }

///Tip calculator

var arr2=[100,200,300,400,50,300];


for (let j = 0; j <arr2.length; j++) 
{
   
    if(arr2[j]<100)
    {
        arr2[j]=arr2[j]+(arr2[j]*0.15);

    }
    else
    {
        arr2[j]=arr2[j]+(arr2[j]*0.20);
    }
   }

console.log('final bill',arr2)

//array declaration
var ar=[1,2,3,4,5];
var a=new Array('a','b','c','d');

var arr3=[1,2,3,4,5,7,6];
//array methods

//length method
console.log('array length',arr3.length);

//indexOf()
var index=arr3.indexOf(3);
console.log('index of 3 is:',index);

//inclueds()
var inc=arr3.includes(1);
console.log(inc);

//push()
var p=arr3.push('kashi');
console.log('after push array',arr3);

//unshift()
var u=arr3.unshift('jadhav');
console.log('after unshft array',arr3);

//pop()
var p=arr3.pop();
console.log('after pop array',arr3);

//shift()
var p=arr3.shift();
console.log('after shft array',arr3);

//reverse()
console.log(arr3.reverse());

//map
const map1 = arr3.map(x => x * 2);
console.log(map1);

//foreach()
var data2=arr3.forEach(data=>
    {
console.log('for each data',data +20);
})


//filter():It creates a new array filled with elements that pass test provided by function


//sort()
const sort=arr3.sort();
console.log('sorted array',sort);

//concat()
const con=arr.concat(arr3);
console.log('concat array',con);

//every()
// every() executes a function for each array element.
// every() returns true if the function returns true for all elements.
// every() returns false if the function returns false for one element.


//some()
// some() checks if any array elements pass a test (provided as a function).
// some() executes the function once for each array element:
// If it returns true, some() returns true and stops.
// If it returns false, some() returns false and stops.

//join()
var myarr=['a','b','c'];
console.log(myarr.join(' '+ 'albhebets' + ' '))

//reduce()

//find() ind() method search through all the child elements only. 
//find: return first item with matching condition. return an object or value


//findindex()
const ages = [3, 10, 18, 20];

const ab=ages.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}
console.log('findIndex is',ab);


//fill()
var farray=arr3.fill('abc');
console.log("fill array",farray);

//slice()
var slice=arr3.slice(0,2);
console.log('slice element',slice);

