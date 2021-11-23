var val = (arr, result = []) => {
    for (let i = 0; i < arr.length; i++) {
        var value = arr[i];
        if (Array.isArray(arr[i])) {
            val(value, result)
        } else {
            result.push(value);

        }
    }
    return result;
}
let arr = [1, 2, [3, 4, [5, 6,3],[8,9]]];
console.log(val(arr));



var list = [{name : "kashi", age : 23},
     { name : "vijay", age : 22}, 
     { name : "Ajay", age : 23}, 
     {name : "Chintu", age : 22}];

var finallist = {};
for(var i = 0; i < list.length; i++) {
    if(finallist[list[i].age]) {
        finallist[list[i].age].push(list[i].name);
    } else {
        finallist[list[i].age] = [list[i].name];
    }
}
console.log ((finallist));