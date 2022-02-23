Function.prototype.myCall = function(context) {
    context = context || window; // 默认 window
    const args = [...arguments].slice(1); // 参数
    const fn = Symbol(); // 给 context 设置一个独一无二的属性，避免覆盖原有属性
    context[fn] = this; // 这里的 this 指向调用它的函数 fn
    const result = context[fn](...args); // 调用之
    delete context[fn]; // 删除添加的属性
    return result; // 返回值
}
fn.myApply();
// context是我们设置的this，fn是调用的函数，所以要为context设置一个fn的属性，通过context.fn来调用，this就是context了
Function.prototype.myApply = function(context, args) {
    context = context || window; // 默认 window
    args = [...args]; // 参数
    const fn = Symbol(); // 给 context 设置一个独一无二的属性，避免覆盖原有属性
    context[fn] = this; // 这里的 this 指向调用它的函数fn
    const result = context[fn](...args); // 调用之
    delete context[fn]; // 删除添加的属性
    return result; // 返回值
}
Function.prototype.myBind = function(context) {
    context = context || window; // 默认 window
    const args = [...arguments].slice(1); // 参数
    const fn = this; // 这里的 this 指向调用它的函数 fn
    return function () {
        return fn.apply(context, args);
    };
}

function call(context) {
    context = context || window;
    const fn = Symbol();
    const args = [...arguments].slice(1);
    context[fn] = this;
    const result = context[fn](args);
    delete context[fn];
    return result;
}

function apply(context, args) {
    context = context || this;
    const args = [...args];
    const fn = Symbol();
    context[fn] = this;
    const result = context[fn](args);
    delete context[fn];
    return result;
}

function bind(context) {
    context = context || window;
    const fn = this;
    const args = [...arguments].slice(1);
    return function () {
        return fn.apply(context, args);
    }
}

function call(context) {
    context = context || window;
    const fn = Symbol();
    const args = [...arguments].slice(1);
    context[fn] = this;
    const result = context[fn](args);
    delete context[fn];
    return result;
}

function apply(context, args) {
    context = context || window;
    const fn = Symbol();
    context[fn] = this;
    const result = context[fn](args);
    delete context[fn];
    return result;
}
function bind(context) {
    context = context || window;
    const fn = this;
    const args = [...arguments].slice(1);
    return function() {
        return fn.apply(context, args);
    }
}

function apply (context, args) {
    const args = [...args];
    const fn = Symbol();
    context[fn] = this;
    const result = context[fn](args);
    delete context[fn];
    return result;
}
function call (context, ...args) {
    const fn = Symbol();
    context[fn] = this;
    const result = context[fn](...args);
    delete context[fn];
    return result;
}