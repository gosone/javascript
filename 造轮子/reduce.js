const reduce = (list, fn, ...init) => {
    let next = init.length ? init[0] : list[0]
    for (let i = init.length ? 0 : 1; i < list.length; i++) {
      next = fn(next, list[i], i)
      console.log(next)
    }
    return next
}
// => 55
console.log(reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x, y) => x + y))

// => 155
console.log(reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x, y) => x + y, 100))

// => NaN
console.log(reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x, y) => x + y, undefined))

function reduce(arr, fun, start) {
    var start = start? start : 0;
    arr.forEach((item, key) => {
        fun()
    })
    return start;
}
