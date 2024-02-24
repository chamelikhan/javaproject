
let timestart;

const starttimeout = document.getElementById("starttimeout");
const interveltime = document.getElementById("interveltime");


function starttimeOut() {

  timestart = setTimeout (function(){

    starttimeout.innerHTML = 'Time is over';

  }, 3000);
  
}


function stopTime() {
   clearTimeout(timestart);
}


function interveltimeStart(){

  interveltimestart = setInterval (function(){

    starttimeout.innerHTML = new Date().toLocaleTimeString();

  }, 1000);

}

function interveltimestop() {
   clearInterval(interveltimestart);
}