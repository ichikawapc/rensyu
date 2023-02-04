const myHeading = document.querySelector('h1');
myHeading.textContent = 'こんにちは世界!これはjavascriptで作られた文章だよ';

let count = 1;
let display = "Counter: " + count;

function incr() {
    count = count + 1;
    display = display + " "+ count
}

function show() {
    const counter = document.querySelector('#counter');
    counter.textContent = display;
}

function work() {
    show();
    const ms = 500; //500 ミリ秒
    new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms)
    }).then(() => {
        incr();
        show();
        work();
    });
}

window.onload = function() {
    work();
}
