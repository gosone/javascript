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
 * await 命令 **await 下面所有的代码都是异步**
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
