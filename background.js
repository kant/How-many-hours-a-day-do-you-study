let random=Math.floor(Math.random()*10)
const html=document.querySelector("html")
html.style.backgroundImage=`url(images/background${random}.jpg)`
html.style.backgroundRepeat="no-repeat"
html.style.backgroundSize="cover"