# Background Image
`background-image`는 10개의 free copyright image들로 구성되어 있으며, 10개의 이미지가 1분마다 바뀌도록 설정해놓았습니다.  
<br>

## Keyframes
```css
@keyframes fadeIn{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

#background{
    animation: fadeIn 2s;
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top:0;
    left: 0;
    z-index: -1;
}
```
`CSS`를 이용해 화면에 그림이 표시될 때 이미지가 점점 밝아지는 효과를 넣었습니다.  
`html:after`을 이용하여 이미지를 `html`전체에 적용적용하려고 했으나, `:after`효과를 `Javascript`에서 제어하는 법을 알지 못해 `id="background"`라는 임의의 `div`에 `z-index:-1`을 추가해 html의 뒤쪽에 이미지가 떠오르게 하였습니다. 이는 `opacity`를 이용하기 위함입니다.   
<br>

## Math.random
`Math.random`을 이용해 백그라운드 이미지에 10개의 이미지가 임의로 나오도록 설정했습니다.

```javascript
let random=Math.floor(Math.random()*9)
const background=document.querySelector("#background")
background.style.backgroundImage=`url(images/background${random}.jpg)`
```
<br>


## setInterval
`setInterval`안에 `setTimeout`을 집어넣어 주기적으로 `setTimeout`이 실행되도록 하였습니다.
아래 보이는 `change`함수를 60초에 한번씩 실행시키며 2초동안 `fadeOut`함수를 사용해, 전의 이미지가 사라지고 다음 2초 후에는 `fadeIn`함수를 통해 새로운 이미지가 나타나게 했습니다.

```js
function change(){
    background.style.animation="fadeOut 2s"
    setTimeout(()=>{
        random=Math.floor(Math.random()*9)
        background.style.animation="fadeIn 2s"
        background.style.backgroundImage=`url(images/background${random}.jpg)`
    },1900)
}

setInterval(change,60000)
```
