//age calculator

var currentYear =2021;
var birthYear = 1999;

function calcage(current,birth){

    
     let age = current-birth;
     return age;
}

let final_age = calcage(currentYear,birthYear);
console.log("age is: ",final_age);


//BMI calculator


var height =  5.7;
var weight = 60;

function calcbmi(w,h){
    let bmi = w/(h*h);
    return bmi;
}

var bmi = calcbmi(weight,height);
console.log('bmi is: ',bmi);