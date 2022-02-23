function Parent() {
    this.name = '';
    this.parentdo = () => {
        console.log('parent');
    }
}
Parent.prototype.do = () => {

}
function Child(name) {
    Parent.call(this);
    this.name = name;
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

function Parent() {
    this.name = '';
    this.parentdo = () => {
        console.log('parent');
    }
}
function content(obj) {
    function f() {

    }
    f.prototype = obj;
    return new f();
}
function child () {
    parent.call(this);
}
child.prototype = content(parent.prototype);
child.prototype.constructor = child;
