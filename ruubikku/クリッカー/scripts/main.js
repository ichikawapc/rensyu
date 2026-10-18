console.log("a");
let point = 0;
let pointup = 1;
let pointupcost = 50;
let pointsecond = 0;
let pointsecondcost = 200;
window.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("botan");
    const button2 = document.getElementById("botan2");
    const button3 = document.getElementById("botan3");

    button.onmousedown = function() {
        button.src = "img/押ボタン.png";
        point = point + pointup;
        const pointElement = document.getElementById("point");
        pointElement.textContent = point;
    };
    button2.onmousedown = function() {
        if (point >= pointupcost){
            point = point - pointupcost;
            pointupcost = Math.round(pointupcost * 1.5);
            pointup = pointup + 1;
            const pointElement = document.getElementById("point");
            pointElement.textContent = point;
            const pointupElement = document.getElementById("pointup");
            pointupElement.textContent = pointup;
            const pointupcostElement = document.getElementById("pointupcost");
            pointupcostElement.textContent = pointupcost;
        }
    }
    button3.onmousedown = function() {
        if (point >= pointsecondcost){
            point = point - pointsecondcost;
            pointsecondcost = Math.round(pointsecondcost * 1.5);
            pointsecond = pointsecond + 1;
            const pointElement = document.getElementById("point");
            pointElement.textContent = point;
            const pointsecondElement = document.getElementById("pointsecond");
            pointsecondElement.textContent = pointsecond;
            const pointsecondcostElement = document.getElementById("pointsecondcost");
            pointsecondcostElement.textContent = pointsecondcost;
        }
    }
    button.onmouseup = function() {
        button.src = "img/ボタン.png";
    };

    setInterval(() => {
        point = Math.round((point + pointsecond / 10) * 10) / 10;
        const pointElement = document.getElementById("point");
        pointElement.textContent = point;
    }, 100);
});