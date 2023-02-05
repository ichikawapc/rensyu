const myHeading = document.querySelector('h1');
myHeading.textContent = 'リンゴスの練習場!これはjavascriptで作られた文章だよ!';

let count = 0;
let display = "";
const text = document.querySelector('p#text-content').textContent;
const len = text.length

function incr() {
    display = display + text[count];
    count = (count + 1) % len;
}

function show() {
    const counter = document.querySelector('#counter');
    counter.textContent = display;
}

function work() {
    show();
    const ms = 10; //ミリ秒
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
