/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/

let counter = 0;
let mongon = ''　

function isPrime(n) {
  if (n <= 1) return false;
  for (var i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

document.querySelector('img').addEventListener('click', function () {
  　counter = counter + 1;
    
    mongon = mongon +'痛っ!';
    if (counter % 2 === 0){
        alert(mongon +counter+'   2の倍数だよ');
    }else if(counter % 3 === 0){
        alert(mongon +counter+'  3の倍数だよ');
    }else if(counter === 5){
        const myImage = document.querySelector('img');
        myImage.setAttribute('src','images/apple.jpg');
        alert(counter+'画像が変わった！！！');
    }
    if(isPrime(counter)===true){
       alert(mongon +counter+'  素数だよ');
      }
});


