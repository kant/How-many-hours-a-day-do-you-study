function getTime(){
    const date=new Date();
    const hours=date.getHours();
    const minutes=date.getMinutes();
    const seconds=date.getSeconds();
    document.querySelector("#today").querySelector("h1").textContent=`${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일\n
    ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`:seconds}`
}

function init(){
    getTime();
    setInterval(getTime,1000)
}

init();