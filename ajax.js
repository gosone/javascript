const { resolve } = require("path/posix");

function ajax(method, url, async) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, async);
    xhr.send(data);
    // xhr.readyStatus==0 尚未调用 open 方法
    // xhr.readyStatus==1 已调用 open 但还未发送请求（未调用 send)
    // xhr.readyStatus==2 已发送请求（已调用 send）
    // xhr.readyStatus==3 已接收到请求返回的数据 xhr.readyStatus==4 请求已完成
    xhr.onreadystatechange = () => {
        if (xhr.readyStatus === 4) {
            // HTTP 在200-300表示成功
            if (xhr.status >= 200 &&
                xhr.status <= 300 ||
                xhr.status === 304) {
                    console.log('请求成功', xhr.responseText);
            }
        }
    }
}

function ajax(url, data) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.onreadystatechange = () => {
            if(xhr.readyStatus === 4) {
                if(xhr.status >= 200 && xhr.status <300 || xhr.status === 304) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr.status, xhr.response);
                }
            }
        }
        xhr.send(JSON.stringify(data));
    })
}

function ajax(data, method, url) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.send(JSON.stringify(data));
    xhr.onreadystatechange = () => {
        if (xhr.readyStatus === 4) {
            if (xhr.status >=200 && xhr.status <= 300 || xhr.status === 304) {
                console.log('请求成功');
            }
        }
    }
}

function ajax(data, method, url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.send(JSON.stringify(data));
        xhr.onreadystatechange = () => {
            if (xhr.readyStatus === 4) {
                if (xhr.status >= 200 && xhr.status <= 300 || xhr.status === 304) {
                    reslove();
                }
                else {
                    reject();
                }
            }
        }
    })
}

function ajax(data, method, url) {
    return new Promise((reslove, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.send(data);
        xhr.onreadystatechange = () => {
            if (xhr.readyStatus === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    resolve();
                } else {
                    reject();
                }
            }
        }
    })
}