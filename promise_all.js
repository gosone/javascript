const { rejects } = require("assert");
const { resolve } = require("path/posix");

function promise_all(promisearg) {
    return new Promise((reslove, reject) => {
        var count = 0;
        for (let i = 0; i < promisearg.length; i++) {
            promisearg[i].then(() => {
                count++;
                if (count === promisearg.length) {
                    resolve();
                }
            }, (error) => {
                rejects(error);
            })
        }
    })
}

function promise_race(promisearg) {
    for(var i = 0; i < promisearg.length; i++) {
        promisearg[i].then((data) => {
            reslove(data);
        }, (err) => {
            rejects(err);
        })
    }
}