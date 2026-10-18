console.log("a");
let point = 0;
let pointup = 1;
window.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("botan");

    button.onmousedown = function() {
        button.src = "img/押ボタン.png";
        pointupfunction();    
    };
    button.ontouchstart = function() {
        button.src = "img/押ボタン.png";
        pointupfunction();
    };
    button.onmouseup = function() {
        button.src = "img/ボタン.png";
    };
    button.ontouchend = function() {
        button.src = "img/ボタン.png";
    };
    
});
function pointupfunction() {
        point = point + pointup;
        console.log(point);
        const pointElement = document.getElementById("point");
        pointElement.textContent = point;
}
