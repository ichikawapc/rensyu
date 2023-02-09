/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/

let click_count = 0;
let mongon = ''

let count = 1;
let display = "Counter: " + count;

function incr() {
    count = count + 1;
    display = display + " "+ count
}

function show() {    
    change_image();
    //const counter = document.querySelector('#counter');
    //counter.textContent = display;
}

function change_image(){
  var arrIm = ["images/apple.jpg",
                "images/IMG_1052.jpg"];
  const myImage = document.querySelector('img');
  myImage.setAttribute('src',arrIm[count%2]);
}

function work() {
    show();
    const ms = 3000; //3000 ミリ秒
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

function isPrime(n) {
  if (n <= 1) return false;
  for (var i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}


window.onload = function() {
    work();
}



document.querySelector('img').addEventListener('click', function () {
    click_count = click_count + 1;
    mongon = mongon +'痛っ!';
    if (click_count % 2 === 0){
        change_image();
        alert(mongon +click_count+'   2の倍数だよ');
    }else if(click_count % 3 === 0){
        alert(mongon +click_count+'  3の倍数だよ');
    }else if(click_count === 5){
        const myImage = document.querySelector('img');
        myImage.setAttribute('src','images/apple.jpg');
        alert(click_count+'画像が変わった！！！');
    }
    if(isPrime(click_count)===true){
       alert(click_count+'  素数だよ');
      }
});


