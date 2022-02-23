function Interval(fun, time) {
        setTimeout(() => {
            fun();
            Interval(fun, time);
        }, time);
}
var f = () => {
    console.log('out');
}
Interval(f, 2000);
