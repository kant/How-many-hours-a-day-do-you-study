let random=Math.floor(Math.random()*9)
const background=document.querySelector("#background")
background.style.backgroundImage=`url(images/background${random}.jpg)`
background.style.backgroundRepeat="no-repeat"
background.style.backgroundSize="cover"

function change(){
    background.style.animation="fadeOut 2s"
    setTimeout(()=>{
        random=Math.floor(Math.random()*9)
        background.style.animation="fadeIn 2s"
        background.style.backgroundImage=`url(images/background${random}.jpg)`
    },1900)
}

setInterval(change,60000)