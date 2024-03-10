let hours = 0;
let minutes = 0;
let seconds = 0

let interval;

function startWatch(){ //function to start the watch
    interval = setInterval(updateWatch, 1000)
    
}

function formatTime(time){
    
    return time<0 ? `0+${time}` : time;
}
function updateWatch(){ //function to update the timer
    seconds++;
    if(seconds>=60){
        seconds = 0;
        minutes++;
    }
    if(minutes>=60){
        minutes =0;
        hours++;
    }
    const hel = document.getElementById("hel")
    const mel = document.getElementById("mel")
    const sel = document.getElementById("sel")

document.getElementById("hrs").innerText = formatTime(hours)
document.getElementById("min").innerText = formatTime(minutes)
document.getElementById("sec").innerText = formatTime(seconds)

}

function stopWatch(){ //function to stop the watch
    clearInterval(interval);
}
function restartWatch(){
    seconds = 0;
    hours = 0
    minutes = 0;
}




//making the buttons work
document.getElementById("start").addEventListener("click", startWatch)
document.getElementById("stop").addEventListener("click", stopWatch)
document.getElementById("restart").addEventListener("click", restartWatch)