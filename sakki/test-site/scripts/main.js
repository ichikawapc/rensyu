const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/anya-icon.png') {
    myImage.setAttribute('src','images/anya-shock.png');
  } else {
    myImage.setAttribute('src','images/anya-icon.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  const myName = prompt('あなたの名前を入力してください。');
  localStorage.setItem('name', myName);
  myHeading.textContent = `Mozilla はかっこいいよ、${myName}`;
}
