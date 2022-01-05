## 添加事件的三种方式
1. 在html标签中直接绑定；
2. 在js中获取到相应的dom元素后绑定；
3. 在js中使用addEventListener（event, function, useCapture）实现绑定；
 ```
 event: 鼠标事件(onclick, onmousedown, onmouseenter...） 键盘事件(onkeydown, onkeyup...)
 function: 
 useCapture: 可选。布尔值，指定事件是否在捕获或冒泡阶段执行。
            true - 事件句柄在捕获阶段执行
            false- 默认。事件句柄在冒泡阶段执行
 ```
 
 ## 变量作用域
 ```
 function f() {
  local = 2;
 }
 // 在调用f时，会创建local变量，并且赋予全局作用域，
 ```
 
 ## 闭包
 
 
 ## 事件委托机制
 事件捕获，事件冒泡
 
 target和currentTarget都是event上面的属性，target是真正发生事件的DOM元素，而currentTarget是当前事件发生在哪个DOM元素上。
 
