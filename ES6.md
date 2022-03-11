## 解构赋值
* 对数组和对象进行模式匹配，进行变量赋值操作。
* 只要等号右边的值不是对象或数组，就先将其转为对象
* 对象要求变量名必须与属性名相同

## 箭头函数
1. 箭头函数不会创建自己的this，所以它没有自己的this，它只会从自己的作用域链的上一层继承this，它会捕获自己在定义时（注意，是！！定义！！时，不是调用时）所处的外层执行环境的this
2. 无法改变他的this指向
3. 不能作为构造函数
4. 没有arguments，用rest代替
5. 没有原型
6. 作为方法的箭头函数this的指向是当前的上下文。
7. 作为方法调用的箭头函数，this指向的是当前定义的上下文。

## 闭包
能够读取其他函数内部变量的函数叫做闭包。

## 深拷贝
1. json.stringify(), json.parse()
2. 弊端
* 如果obj里面有时间对象，则JSON.stringify后再JSON.parse的结果，时间将只是字符串的形式，而不是对象的形式
* 如果obj里有RegExp(正则表达式的缩写)、Error对象，则序列化的结果将只得到空对象；
* 如果obj里有函数，undefined，则序列化的结果会把函数或 undefined丢失；
* 如果obj里有NaN、Infinity和-Infinity，则序列化的结果会变成null
3. json.stringify的使用
* 比较对象或者数组是否相等
* 将对象存入localstorage或者sessionstorage中

## 展开运算符
* 是浅拷贝
* 允许迭代器在接收器内部分别展开或扩展

## 属性的遍历
属性的遍历
* for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）
* Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名
* Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名
* Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名
* Reflect.ownKeys返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举

## Set
值唯一

## Map
* 键值对的集合
* 任何都可以当做键
* 只有对同一个对象的引用才认为是同一个键值

## Async
 * 表明当前函数是异步函数，不会阻塞线程导致后续代码停止运行
    - Generator 函数的语法糖
    - Async函数返回一个 Promise 对象
    - Async函数内部return语句返回的值，会成为then方法回调函数的参数
    - 只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数
 * await 命令 **await 会阻塞后面的代码执行**将后面的同步代码编程异步的微任务
    - 如果await后面的不是promise，那么await会阻塞执行，先执行外部的同步代码。
    - 如果是promise代码，await 也会阻塞async后面的代码，先执行async外面的同步代码，等着 Promise 对象 fulfilled，然后把 resolve 的参数作为 await 表达式的运算结果。
    - 正常情况下，await命令后面是一个 Promise 对象。如果不是，会被转成一个立即resolve的 Promise 对象。
    - 只要一个await语句后面的 Promise 变为reject，那么整个async函数都会中断执行
    - 错误处理
     1.这时可以将第一个await放在try...catch结构里面，这样不管这个异步操作是否成功，第二个await都会执行
     2.await后面的 Promise 对象再跟一个catch方法，处理前面可能出现的错误
    - 并发执行
    ```
        // 写法一
        let [foo, bar] = await Promise.all([getFoo(), getBar()]);
            // 写法二
            let fooPromise = getFoo();
            let barPromise = getBar();
            let foo = await fooPromise;
            let bar = await barPromise;
    实例：按顺序完成异步操作
    ```
## CommonJS和ES6
1. CommonJS对简单类型是复制操作，复杂类型是浅拷贝。ES6是动态只读引用。
2. CommonJS中的简单类型的值会被模块缓存。
3. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口
* 运行时加载：CommonJS的实质是，先引入一个整体的对象，CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。但是不运行的话没办法确定这些方法和属性，所以在运行时才能确定，这就是"运行时加载"。
* 编译时输出接口：ES6模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

## indexDB
浏览器内置的数据库，提供了类似于数据库的数据存储和使用方式，永久保存。

## proxy
```
// 在读取代理对象的原型时触发该操作，比如在执行 Object.getPrototypeOf(proxy) 时。
handler.getPrototypeOf()

// 在设置代理对象的原型时触发该操作，比如在执行 Object.setPrototypeOf(proxy, null) 时。
handler.setPrototypeOf()

 
// 在判断一个代理对象是否是可扩展时触发该操作，比如在执行 Object.isExtensible(proxy) 时。
handler.isExtensible()

 
// 在让一个代理对象不可扩展时触发该操作，比如在执行 Object.preventExtensions(proxy) 时。
handler.preventExtensions()

// 在获取代理对象某个属性的属性描述时触发该操作，比如在执行 Object.getOwnPropertyDescriptor(proxy, "foo") 时。
handler.getOwnPropertyDescriptor()

 
// 在定义代理对象某个属性时的属性描述时触发该操作，比如在执行 Object.defineProperty(proxy, "foo", {}) 时。
andler.defineProperty()

 
// 在判断代理对象是否拥有某个属性时触发该操作，比如在执行 "foo" in proxy 时。
handler.has()

// 在读取代理对象的某个属性时触发该操作，比如在执行 proxy.foo 时。
handler.get()

 
// 在给代理对象的某个属性赋值时触发该操作，比如在执行 proxy.foo = 1 时。
handler.set()

// 在删除代理对象的某个属性时触发该操作，比如在执行 delete proxy.foo 时。
handler.deleteProperty()

// 在获取代理对象的所有属性键时触发该操作，比如在执行 Object.getOwnPropertyNames(proxy) 时。
handler.ownKeys()

// 在调用一个目标对象为函数的代理对象时触发该操作，比如在执行 proxy() 时。
handler.apply()

 
// 在给一个目标对象为构造函数的代理对象构造实例时触发该操作，比如在执行new proxy() 时。
handler.construct()
```
