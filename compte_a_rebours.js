const text = document.querySelector(".rebours")

function Chrono(){
    const now=new Date().getTime();
    const countdowndate=new Date("July 6,2024").getTime();
    //console.log(now,countdowndate);

    const distanceBase = countdowndate - now;

    const jours = Math.floor(distanceBase/(1000*60*60*24));
    const heure = Math.floor((distanceBase % (1000*60*60*24))/(1000*60*60));
    const minute = Math.floor((distanceBase%(1000*60*60))/(1000*60));
    const seconds = Math.floor((distanceBase%(1000*60))/1000);

    text.innerText= `${jours}j ${heure}h ${minute}m ${seconds}s`;
}

const countDownInterval = setInterval(() =>{
    Chrono()
},1000);