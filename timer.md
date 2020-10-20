# Timer
![timer](/readmeImages/3.PNG)  
타이머는 `html`에 `h2`태그로 되어있는 시간표시부분과 시작,리셋,입력의 세 개의 버튼으로 이루어져 있습니다.  
<br>

## h2-Time
창이 꺼져도 타이머가 초기화되지 않게 하기 위해서 `hours`, `minutes`, `seconds`를 `localStorage`에 저장하며 초기값 `0`으로 저장하였습니다.  
저장하는 주기는 0.2초로 설정하였습니다.
```javascript
function storeTime(){
    localStorage.setItem('hours',0)
    localStorage.setItem('minutes',0)
    localStorage.setItem('seconds',0)
    setInterval(()=>{
        localStorage.setItem('hours',hours)
        localStorage.setItem('minutes',minutes)
        localStorage.setItem('seconds',seconds)
    },200)
}
```
<br>

저장한 값을 불러올 때는 `localStorage.getItem`을 통해 불러왔으며, 주기를 4ms로 설정하여 실제 시간과의 격차를 줄이려고 했습니다.  
*참고로 `setInterval`의 주기를 설정하지 않으면 최솟값인 4ms로 자동설정됩니다.*
```js
function intimeEvent(){
    hours=localStorage.getItem('hours')
    minutes=localStorage.getItem('minutes')
    seconds=localStorage.getItem('seconds')
    const time=document.querySelector("#timer").querySelector("h2")
    setInterval(()=>{
        time.textContent=`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`:seconds}`
        if(seconds===60){
            minutes++
            seconds=0
        } else if(minutes===60){
            hours++
            minutes=0
        }
    },4)
}
```
<br>

## Start/Stop
시작버튼은 `addEventListener`을 이용해 `click`시 발동되도록 하였으며, 한 번 누르면 `second`가 1초마다 1씩 증가하도록 설정해 놓았으며, 다시 한 번 더 누르면 `clearInterval`을 통해 주기 실행을 없애도록 설정했습니다.

```js
let inter=-1
document.querySelector("#start").addEventListener("click",()=>{
    if(inter===-1){
        inter = setInterval(()=>{
            seconds++
        },1000)
        start.textContent="중지"
    } else{
        clearInterval(inter)
        inter=-1
        start.textContent="시작"
    }
})
```
<br>

## Reset
리셋버튼은 `html`의 `onclick`을 이용해 "정말초기화 하시겠습니까?"라는 확인창이 뜨게 만들어, 확인을 누를 경우 다음의 함수들을 실행하도록 설정해놓았습니다.
```html
<button onclick="resetCheck()">리셋</button>
```

```js
function resetCheck(){
    if(confirm("정말 초기화하시겠습니까?")===true){
        hours=0
        minutes=0
        seconds=0
        clearInterval(inter)
        inter=-1
        start.textContent="시작"
    }else{
        return false;
    }
}
```
<br>

## Input
입력버튼도 리셋버튼과 동일하게 `onclick`을 이용하였으며, `makeList`라는 함수를 통해 왼쪽에 기록이 되도록 설정했습니다. 이는 <a href="localstorage.md">LocalStorage</a>에서 설명하도록 하겠습니다.

```js
function inputCheck(){
    if(confirm("정말 기록하시겠습니까?\n*주의*시간이 초기화 됩니다.")===true){
        makeList();
        hours=0
        minutes=0
        seconds=0
        clearInterval(inter)
        inter=-1
        start.textContent="시작"
    }else{
        return false;
    }
}
```