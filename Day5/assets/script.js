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