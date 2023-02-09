const myHeading = document.querySelector('h1');
<<<<<<< HEAD
myHeading.textContent = 'Hello world!';

=======
myHeading.textContent = 'Hello00 world!';

const myHeadingGot = document.querySelector('h3');
myHeadingGot.textContent = 'Hello 学長';
>>>>>>> f4a7ea2 (変更)

function message() {
  document.getElementById("view_time").innerHTML = getNow();
}

function getNow() {
	var now = new Date();
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();

	//出力用
	var s = year + "年" + mon + "月" + day + "日" + hour + "時" + min + "分" + sec + "秒"; 
	return s;
<<<<<<< HEAD
}
=======
}
>>>>>>> f4a7ea2 (変更)
