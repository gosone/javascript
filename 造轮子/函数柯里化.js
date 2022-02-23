function curry(fn, ...args) {
    var _args = args;
    var len = fn.length;
    var _this = this;
    return function (...args) {
        var argts = _args.concat(args);
        if (argts.length < len) {
            curry.apply(_this, fn, argts);
        }
        return fn.apply(_this, argts);
    }
}
fn(1)(2)(3);
