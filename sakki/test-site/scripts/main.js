const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
/*
変数の宣言をする
*/
let myVariable;
myVariable = 'Bob';
myVariable;

// Steveに変更する
myVariable = 'Steve';

let iceCream = 'バニラ';
if (iceCream === 'チョコレート') {
  alert('やった、チョコレートアイス大好き！');
} else {
  alert('あれれ、でもチョコレートは私のお気に入り......');
}

let myVar = document.querySelector('h1');
alert('hello!');

function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

document.querySelector('html').addEventListener('click', () => {
  alert('クリックしないでください！！！');
});
