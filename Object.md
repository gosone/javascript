# Object
`Object.assign(target, ...sources)`: 将所有可枚举属性的**值**从一个或多个源对象source分配到目标对象。它将返回目标对象target。

`Object.create(proto，[propertiesObject])`: 创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。

`Object.defineProperties(obj, props)`: 直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
```
obj
在其上定义或修改属性的对象。
props
要定义其可枚举属性或修改的属性描述符的对象。对象中存在的属性描述符主要有两种：数据描述符和访问器描述符（更多详情，请参阅Object.defineProperty()）。描述符具有以下键：
  configurable
  true 只有该属性描述符的类型可以被改变并且该属性可以从对应对象中删除。
  默认为 false
  enumerable
  true 只有在枚举相应对象上的属性时该属性显现。
  默认为 false
  value
  与属性关联的值。可以是任何有效的JavaScript值（数字，对象，函数等）。
  默认为 undefined.
  writable
  true只有与该属性相关联的值被assignment operator (en-US)改变时。
  默认为 false
  get
  作为该属性的 getter 函数，如果没有 getter 则为undefined。函数返回值将被用作属性的值。
  默认为 undefined
  set
  作为属性的 setter 函数，如果没有 setter 则为undefined。函数将仅接受参数赋值给该属性的新值。
  默认为 undefined
```
`Object.defineProperty(obj, prop, descriptor)`: 直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
`Object.entries()`: 返回一个给定对象自身可枚举属性的键值对数组
```
const object1 = {
  a: 'somestring',
  b: 42
};
for (const [key, value] of object1.entries()) {
  console.log(`${key}: ${value}`)
}
```
`Object.getOwnPropertyNames(obj)`: 返回一个由指定对象的所有**自身属性**的属性名（**包括不可枚举**属性但不包括Symbol值作为名称的属性）组成的数组。
``
`Object.keys(obj)`: 返回一个由一个给定对象的**自身可枚举属性**组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。

`obj.hasOwnProperty(prop)`: 返回一个布尔值，指示对象**自身属性**中是否具有指定的属性（也就是，是否有指定的键）。





