console.log("a");
window.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("botan");

    button.onmousedown = function() {
        button.src = "img/押ボタン.png";
    };
    button.onmouseup = function() {
        button.src = "img/ボタン.png";
    };
});
