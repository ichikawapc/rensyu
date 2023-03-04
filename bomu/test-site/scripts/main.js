const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';


//HTMLを実行して10秒経過したら、「10秒経過しました」と表示する。
window.setTimeout(dispMsg, 10000);

function dispMsg(){
    alert('10秒経過しました');
}


//ウェブページをクリックすると、表示する。
document.querySelector('html').addEventListener('click', function () {
    alert('痛っ! つつかないで!');
  });
  