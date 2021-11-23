// let user
// {
//     name:"kashi";
//     age :23
// }

// for(const key in user)
// {
//     console.log(key);
// }
// console.log(user.name);
// console.log(user[name]);

let user ={name:"kashi" ,age:22};

console.log(user)

let clone={};

for(let key in user)
{
    clone[key]=user[key];
}

console.log('cloned array',clone);
console.log(Object.keys(user));
console.log(Object.values(user))



//task2
let val={
result: function (age)
    {
        if(age<18)
        {
            console.log('age is minor')
        }
        else 
        {
            console.log('age is major')
        }
}
}
console.log(val.result(20));