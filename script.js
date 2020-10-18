const today=document.querySelector("#today")
const clock=today.querySelector("h1")

function getTime(){
    const date=new Date();
    const hours=date.getHours();
    const minutes=date.getMinutes();
    const seconds=date.getSeconds();
    clock.textContent=`${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일\n
    ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`:seconds}`
}

const timer=document.querySelector("#timer")
const intimer=timer.querySelector("h2")

let hours=0
let minutes=0
let seconds=0

const start=document.querySelector("#start")
const stop=document.querySelector("#stop")
const reset=document.querySelector("#reset")
start.addEventListener("click",()=>{
    let plus=seconds++
    setInterval(plus,1000)
    intimer.textContent=`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`:seconds}`
    if(seconds===59){
        minutes++
        seconds=-1
    } else if(minutes===59){
        hours++
        minutes=-1
    }
})


getTime();
setInterval(getTime,1000)

const record=document.querySelector("#record")
const input=document.querySelector("#input")