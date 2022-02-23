function flatten(arr) {
    var flattened_arr = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattened_arr = flattened_arr.concat(flatten(arr[i]));
        }
        else {
            flattened_arr.push(arr[i]);
        }
    }
    return flattened_arr;
}
var a = [1, [2, 3], 4, 5, 6];
console.log(flatten(a));