const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';


//HTMLを実行して10秒経過したら、「10秒経過しました」と表示する。
window.setTimeout(dispMsg, 10000);

function dispMsg(){
    alert('10秒経過しました');
}


//ウェブページをクリックすると、表示する。
//document.querySelector('html').addEventListener('click', function () {
//    alert('痛っ! つつかないで!');
//  });
  

//画像を入れ替える
const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src','images/mmicrosoft-edge.png');
  } else {
    myImage.setAttribute('src','images/firefox-icon.png');
  }
}


//名前を変更する
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('あなたの名前を入力してください。');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla はかっこいいよ、${myName}';
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla はかっこいいよ、${storedName}';
}

myButton.onclick = () => {
    setUserName();
}