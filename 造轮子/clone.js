// 浅拷贝
// 赋值地址

function deepclone (obj) {
    if (typeof obj == 'object') {
        for( let key in obj) {
            var result = obj.constructor == Array ? [] : {};
            if (typeof obj[key] !== 'object') {
                result[key] = obj[key];
            } else {
                deepclone(obj[key]);
            }
            
        }
    } else {
        var result = obj;
    }
    return copyobj;
}

function deepCopy(obj){
    //判断是否是简单数据类型，
    if (typeof obj == "object"){
        //复杂数据类型
        var result = obj.constructor == Array ? [] : {};
        for(let i in obj){
            result[i] = typeof obj[i] == "object" ? deepCopy(obj[i]) : obj[i];
        }
    } else {
        //简单数据类型 直接 == 赋值
        var result = obj;
    }
    return result;
}

function deepclone(obj) {
    if (typeof obj == 'object') {
        var result = obj.constructor == Array ? [] : {};
        for (let i in obj) {
            result[i] = typeof obj[i] == 'object' ? deepclone(obj[i]) : obj[i];
        }
    }
    else {
        var result = obj;
    }
    return result;
}

function deepClone(person) {
    if (typeof obj === 'object') {
        var object = new Object;
        for (let i in person) {
            result[i] = typeof person[i] === 'object' ? deepClone(person[i]) : person[i];
        }
    }
    else {
        var object = person;
    }
    return object;
}
