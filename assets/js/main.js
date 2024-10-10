/*****************************************/
/* Ignoramos esta parte por el momento */
/*****************************************/
let intervalId = window.setInterval(function () {
    //console.log("Clock isn't working yet!");
}, 10000);

function stopClock() { 
    clearInterval(intervalId);
}
/*****************************************/

window.onload = function () { 
    const miReloj = document.getElementById("clock");
    console.log(miReloj);
   console.dir(miReloj);
   
   
   miReloj.innerText = "Hola Hola :)";

   const headers = document.getElementsByTagName("div");
   console.dir(headers);

}

function randint(min, max) {
    return Math.floor(Math.random()*(max - min + 1))+ min;
}

function changeEmojiColor(elem) {
    const r = randint(0, 255);
    const g = randint(0, 255);
    const b = randint(0, 255);
    elem.style.fill = "rgb(" + r + "," + g + "," + b + ")";
}
