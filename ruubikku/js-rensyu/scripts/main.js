console.log("hello rubikku");
console.log("ru_26");
let a = 0;
let cli = 1;
let po = 50;
let o = 1;
let ootip = 0;
let ii = 0;
let ootpo = 200;
window.addEventListener('DOMContentLoaded', function(){
    this.setInterval(() => {
        a = a + ootip/10;
        console.log(a);
        ii = Math.floor(a*10)/10;
        let g = this.document.getElementById("ku");
        g.innerHTML=ii+" point"
    }, 100);
});
function clicka(){
    a = a + cli;
    let ii = Math.floor(a*10)/10;
    let dis = document.getElementById("ku");
    dis.innerHTML=ii+" point"
}
function clicke(){
    if (po<=a){
        cli = cli + o
        a = a - po
        po = po*2
        let dis = document.getElementById("ku");
        dis.innerHTML=a+" point"
        let di = document.getElementById("ki");
        di.innerHTML=po+"point = +"+o
        let aa = document.getElementById("ko");
        aa.innerHTML="1click = "+cli
    }
}
function clickw(){
    if (ootpo<=a){
        ootip = ootip + 1;
        a = a - ootpo;
        ootpo = Math.floor(ootpo * 2.5);
        let dis = document.getElementById("ku");
        dis.innerHTML=a+"point"
        let di = document.getElementById("oot");
        di.innerHTML=ootpo+"point = +1"
        let oot = document.getElementById("ooto");
        oot.innerHTML="1s = "+ootip
    }
}