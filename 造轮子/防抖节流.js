const { time } = require("console");

// 防抖：一个事件发生一定时间之后才会执行特定的动作
function debounce(fn, await) {
    let timer = null;
    return function () {
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.call(context);
        }, await);
    };
}

function debounce(fn, await) {
    let timer = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn();
        }, await);
    }
}

// 节流：在n秒内触发多次，等待n秒之后再执行
function throttle(fn,wait){
    let valid = true
    if(!valid){
        //休息时间 暂不接客
        return false
    }
    // 工作时间，执行函数并且在间隔期内把状态位设为无效
    valid = false
    setTimeout(() => {
        fn();
        valid = true;
    }, wait)
}
function throttle(fn, wait) {
    let valid = true;
    if (!valid) {
        return false;
    }
    valid = false;
    setTimeout(() => {
        fn();
        valid = true;
    }, wait)
}


// 防抖
function debounce(fn, await) {
    let timer = null;
    return function() {
        let context = this;
        clearTimeout(timer);
        timer = setTimeOut(() => {
            fn.call(context);
        }, await);
    }
}




// 节流
function throttle(fn, await) {
    let valid = true;
    return function () {
        if (!valid) {
            return;
        }
        valid = false;
        setTimeout(() => {
            fn();
            valid = true;
        }, await);
    }
}

function debounce(fn, await) {
    let timer = null;
    return function() {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn();
        }, await);
    }
}

function throttle(fn, await) {
    let valid = true;
    return function () {
        if (!valid) {
            return;
        }
        valid = false;
        setTimeout(() => {
            fn();
            valid = true;
        }, await)
    }
}
