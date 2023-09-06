const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

alert("Hi! :o");

document.querySelector("html").addEventlistner("click", () => {
  alert("呼んだ?:)");
});
