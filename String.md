## String

基本字符串和字符串对象的区别：

字符串字面量 (通过单引号或双引号定义) 和 直接调用 String 方法(没有通过 new 生成字符串对象实例)的字符串都是==基本字符串==。JavaScript会==自动==将基本字符串==转换==为字符串对象，只有将基本字符串转化为字符串对象之后才可以使用字符串对象的方法。当基本字符串需要调用一个字符串对象才有的方法或者查询值的时候(基本字符串是没有这些方法的)，JavaScript 会自动将基本字符串转化为字符串对象并且调用相应的方法或者执行查询。

```js
var s_prim = "foo";
var s_obj = new String(s_prim);
console.log(s_obj.substring(1));// oo
console.log(typeof s_prim.substring(1));// string
console.log(typeof s_obj.substring(1));// string
console.log(typeof s_prim); // Logs "string"
console.log(typeof s_obj);  // Logs "object"
```

调用字符串对象才有的方法或者查询值的时候，会自动转换为字符串对象，但是再进行typeof输出的时候，还是string类型

### String.prototype

`str.charAt(index)`：把字符串当作一个类似数组的对象，其中的每个字符对应一个数值索引，如果index超出范围则返回空字符串。

```js
var str = 'getajob';
str.charAt(100); // ""
str[100] // undefined
```

`str.charCodeAt(index)`：返回索引处的UTF-16 代码单元

`str.concat(str2, [, ...strN])`：==字符串连接==，返回连接到str的新字符串

`str.repeat(count)`：返回重复了count次数的新字符串

`str.toLowerCase()`：转换为小写

`str.toUpperCase()`：转换为大写

`str.toString()`：==调用对象的字符串==，返回对象的字符串形式

`str.trim()`：返回一个从两头==去掉空白字符==的字符串，并==不影响==原字符串本身

`str.valueOf()`：返回String对象的原始值

匹配：

`str.endsWith(searchString[, length)`：length-> str的长度，如果在搜索字符串的末尾则返回true，否则返回false

`str.startsWith(searchString[, position])`：==position可选==，开始位置，返回==true/false==

`str.includes(searchString[, position)`：==position（可选）==为开始搜索位置，默认为0，==区分大小写==，如果存在返回true，不存在返回false

`str.search(regexp)`：返回首次匹配的索引，否则返回-1

`str.indexOf(searchValue [, fromIndex)`：==区分大小写，==返回searchValue第一次出现的==索引==，没有则返回-1

`str.lastIndexOf(searchValue [, fromIndex)`：==区分大小写==，返回最后一次出现的==索引==，没有则返回-1

`str.match(regexp)`：检索返回一个字符串匹配正则表达式的结果

`str.replace(regexp|substr, newSubStr|function )`：==reg==所匹配的都会被新的字符串==替换==掉，==substr==匹配的只会替换掉第一个匹配项，function一个用来创建新子字符串的函数，该函数的返回值将替换掉第一个参数匹配到的结果

`str.replaceAll(regexp|substr, newSubStr|function )`：==替换==所有，regexp要设置为全局

截取：

`str.slice(beginIndex[, endIndex])`：==截取字符串==，endIndex可选，包括beginIndex，==不包括endIndex==

`str.substring(indexStart[, indexEnd])`：需要==截取==的第一个字符的索引，==不包含indexEnd==

`str.split([separator[, limit]])`：separator分割字符，limit==限制片段数量==

### string函数

`str.raw(callsite, ...substituations)`：模板字符串的标签函数

