//analog clock ---------------------------------------------------

let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(setClock , 1000);

function setClock()
{
    const day = new Date();
    const secondsRatio = day.getSeconds() / 60;
    const minutesRatio = (secondsRatio + day.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + day.getHours()) / 12;

    setRotation(hr , hoursRatio);
    setRotation(mn , minutesRatio);
    setRotation(sc , secondsRatio);
}

function setRotation(element , ratio)
{
    element.style.transform = `rotateZ(${ratio*360}deg)`;
}

setClock();

//digital clock -------------------------------------------------

let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

setInterval(setDigiClock , 1000);

function setDigiClock()
{
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am_pm = h>=12 ? "PM" : "AM";

    //24 hour format to 12 hour format
    if(h>12)
    {
        h = h-12;
    }

    //if single digit time , add 0 before it
    h = (h<10) ? "0" + h : h;
    m = (m<10) ? "0" + m : m;
    s = (s<10) ? "0" + s : s;
    
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    ampm.innerText = am_pm;
}

setDigiClock();