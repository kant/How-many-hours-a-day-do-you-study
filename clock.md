# Clock
한국의 현재 시간을 가져와서 표시합니다.  
글자의 테두리에 `text-shadow`효과를 주어 어두운 배경에서도 글자가 또렷히 보이도록 설정했습니다.  
![clock](/readmeImages/2.PNG)
```css
#clock{
    color: black;
    text-shadow:-1px 0 #F2F1F6, 0 1px #F2F1F6, 1px 0 #F2F1F6, 0 -1px #F2F1F6;
}
```
<br>

## Code
```javascript
function getTime(){
    const date=new Date();
    const hours=date.getHours();
    const minutes=date.getMinutes();
    const seconds=date.getSeconds();
    document.querySelector("#clock").querySelector("h2")textContent=`${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일 ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`:seconds}`
}
```
`id="clock"`인 부분의 `h2`태그를 선택하여 `textContent`를 바꾸는 식으로 설정하였고,  
if문의 축약형태인 `삼항 조건 연산자(conditional ternary operator)`를 사용하여 조건문을 간단하게 표현했습니다.
```javascript
${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`:seconds}`
```

시간을 가져와서 모니터에 표시되는 것 0.2초마다 반복하여 실제 시간과 격차를 줄이도록 노력했습니다.
```javascript
getTime();
setInterval(getTime,200)
```