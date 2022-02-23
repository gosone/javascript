function flatten(obj) {
    var flatten_obj = new Object();
    for (let i in obj) {
        if (typeof obj[i] === 'object' && obj[i] !== null) {
            flatten_obj[i] = flatten(obj[i]);
        }
        else {
            flatten_obj[i] = obj[i];
        }
    }
    return flatten_obj;
}