let chrono = document.getElementById("chrono");
let resetBtn = document.getElementById("reset");
let stopBtn = document.getElementById("stop");
let startBtn = document.getElementById("start");

let hours = 0;
let minutes = 0;
let secondes = 0;

let timeout;

let estArrete = true;

const demarrer =() => {
    if (estArrete){
        estArrete = false;
        defilerTemps();
    }
};

const arreter = () => {
    if (estArrete){
        estArrete = true;
        clearTimeout(timeout);
    }
};

const defilerTemps = () => {
    if (estArrete) return;
    secondes = parseInt(secondes);
    minutes = parseInt(minutes);
    hours = parseInt(hours);
    secondes++;

    if(secondes == 60){
        minutes++;
        secondes = 0;
    }

    if(minutes == 60){
        hours++;
        minutes = 0;
    }

    // affichage
    if(secondes < 10){
        secondes = "0" + secondes;
    }

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    if(hours < 10){
        hours = "0" + hours;
    }

    chrono.textContent = `${hours}:${minutes}:${secondes}`;
    timeout = setTimeout(defilerTemps, 1000);
};

const reset = () => {
    chrono.textContent = "00:00:00";
    estArrete = true;
    hours=0;
    minutes=0;
    secondes=0;
    clearTimeout(timeout);
};
startBtn.addEventListener("click", demarrer);
stopBtn.addEventListener("click", arreter);
resetBtn.addEventListener("click", reset);