# Array
## Array.prototype
`arr.concat(value1[, value2[, ...[, valueN]]])`:数组拼接,返回一个新数组

`arr.copyWithin(target[, start[, end]])`:浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度，会**改变原数组**。

`arr.entries()`: 返回一个数组的迭代器

`arr.some(callback(element[, index[, array]])[, thisArg])`: 测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。找到真值则停止。

`arr.every(callback(element[, index[, array]])[, thisArg])`: 测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
```
callback
用来测试每个元素的函数，它可以接收三个参数：
  element
  用于测试的当前值。
  index可选
  用于测试的当前值的索引。
  array可选
  调用 every 的当前数组。
thisArg
执行 callback 时使用的 this 值。
返回值
如果回调函数的每一次返回都为 truthy 值，返回 true ，否则返回 false。
```

`arr.fill(value, start, end)`: **会改变原数组**，用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引，end超过length则不显示。

`arr.fliter(callback(element[, index[, array]])[, thisArg])`: 创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。返回一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。 
```
callback
用来测试数组的每个元素的函数。返回 true 表示该元素通过测试，保留该元素，false 则不保留。它接受以下三个参数：
  element
  数组中当前正在处理的元素。
  index可选
  正在处理的元素在数组中的索引。
  array可选
  调用了 filter 的数组本身。
thisArg可选
执行 callback 时，用于 this 的值。
function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

`arr.flat([depth])`: depth指定要提取嵌套数组的结构深度，默认值为 1,按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

`arr.forEach(callback(currentValue [, index [, array]])[, thisArg])`: 对数组的每个元素执行一次给定的函数，返回值undefined。

forEach() 遍历的范围在第一次调用 callback 前就会确定。调用 forEach 后添加到数组中的项不会被 callback 访问到。如果已经存在的值被改变，则传递给 callback 的值是 forEach() 遍历到他们那一刻的值。已删除的项不会被遍历到。如果已访问的元素在迭代时被删除了（例如使用 shift()），之后的元素将被跳过不会改变原数组，但是数组可能会被callback改变，无法终止foreach循环。
```
若你需要提前终止循环，你可以使用：
一个简单的 for 循环
for...of / for...in 循环
Array.prototype.every()
Array.prototype.some()
Array.prototype.find()
Array.prototype.findIndex()
这些数组方法则可以对数组元素判断，以便确定是否需要继续遍历：
every()
some()
find()
findIndex()
```

`Array.from(arrayLike[, mapFn[, thisArg]])`: 返回一个新的数组实例
```
arrayLike
想要转换成数组的伪数组对象或可迭代对象。
mapFn 可选
如果指定了该参数，新数组中的每个元素会执行该回调函数。
thisArg 可选
可选参数，执行回调函数 mapFn 时 this 对象。
```

`arr.find(callback[, thisArg)`: find方法对数组中的每一项元素执行一次 callback 函数，直至有一个 callback 返回 true。当找到了这样一个元素后，该方法会立即返回这个元素的值，否则返回 undefined。
```
callback
在数组每一项上执行的函数，接收 3 个参数：
  element
  当前遍历到的元素。
  index可选
  当前遍历到的索引。
  array可选
  数组本身。
thisArg可选
执行回调时用作this 的对象。
```

`arr.findIndex(callback[, thisArg])`: 返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
```
callback
针对数组中的每个元素, 都会执行该回调函数, 执行时会自动传入下面三个参数:
  element
  当前元素。
  index
  当前元素的索引。
  array
  调用findIndex的数组。
thisArg
可选。执行callback时作为this对象的值.
```

`arr.includes(valueToFind[, fromIndex])`: 判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false。fromIndex为起始位置。0 的值将全部视为相等，与符号无关（即 -0 与 0 和 +0 相等），但 false 不被认为与 0 相等。

`arr.indexOf(searchElement, fromIndex)`: 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

`arr.lastIndexOf(searchElement, fromIndex)`: 返回最后一个匹配项索引。

`arr.join(separator)`: 将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。

`arr.keys()`: 返回一个包含数组中每个索引键的Array Iterator对象，返回索引值数组。

`arr.map()`: 创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。
```
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array 
}[, thisArg])
callback
生成新数组元素的函数，使用三个参数：
  currentValue
  callback 数组中正在处理的当前元素。
  index可选
  callback 数组中正在处理的当前元素的索引。
  array可选
  map方法调用的数组。
thisArg可选
执行 callback 函数时值被用作this。
```
`arr.pop()`

`arr.push(element1, element2, ...)`

`arr.shift()`

`arr.unshift()`: 想开头添加一个或者多个新元素，返回数组的长度

`arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])`: 对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。

`arr.reverse()`：颠倒后的数组，会**改变原数组**

`arr.slice(begin, start)`: 返回新数组，原数组的浅拷贝。
```
如果原数组的某个元素是一个对象的引用（不是实例），那么将拷贝这个对象的引用到新数组中，如果这个引用发生了更改，那么其他的也会发生改变。
```

`arr.sort([compareFunction])`: **改变原数组**compareFunction可选，如果省略，则按Unicode排序，如果compareFunction(a,b)<0，那么a将排在b前

`array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`: 删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会**改变原数组**，从start开始删除deleteCount个元素。

`arr.toString()`: 返回一个表示数组及其元素的字符串

## Array
`array.isArray(obj)`: obj为需要检测的对象
