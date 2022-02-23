var test = function (parent, child) {
    var o = parent.prototype;
    child = child._proto_;
    while (true) {
        if(child === Null) return false;
        if (child = o) {
            return false;
        }
        child = child._proto_;
    }
}

function instance_of (parent, child) {
    var parent_pr = parent.prototype;
    var child_pr = child._proto_;
    while (child_pr) {
        if (child_pr === parent_pr) {
            return true;
        }
        child_pr = child_pr._proto_;
    }
    return false;
}

function instance_of (parent, child) {
    var o = parent.prototype;
    var child_pr = child._proto_;
    while (child_pr) {
        if (child_pr === o) {
            return true;
        }
        child_pr = child._proto_;
    }
    return false;
}