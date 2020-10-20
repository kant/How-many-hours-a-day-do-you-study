# Input
기본적으로 `입력`버튼을 누르면  `html`의 `li`태그를 생성해 그 안에 언제(`when`), 그리고 얼만큼(`howMany`)의 시간이 기록되었는지 표시하는 공간을 넣고 옆에 삭제버튼을 넣습니다. 그 후 만든`li`태그를 왼쪽의 공간인 `history`라는 `ul`에 넣습니다.  
![inputs](/readmeImages/4.PNG)
```js
function makeList(){
    const li=document.createElement("li")
    const when=document.createElement("span")
    const howMany=document.createElement("span")
    const delBtn=document.createElement("button")
    const date=new Date()
    when.textContent=`${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일`
    howMany.textContent=`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`:seconds}`
    howMany.style.margin="20px"
    delBtn.textContent="삭제"
    li.appendChild(when)
    li.appendChild(howMany)
    li.appendChild(delBtn)
    history.appendChild(li) 
}
```
<br>

## Save it into local storage
`localStorage`에 저장하기 위해서, `records`라는 임의의 배열을 만들고 배열과 `localStorage`를 동기화 하는 식으로 하였다. 다음은 그 과정을 추가한 `makeList()`함수이다.
```js
let records=[]
function makeList(){
    const li=document.createElement("li")
    const delBtn=document.createElement("button")
    const newId=records.length+1
    const when=document.createElement("span")
    const howMany=document.createElement("span")
    howMany.style.margin="20px"
    delBtn.textContent="삭제"
    delBtn.addEventListener("click",deleteRec)
    const date=new Date()
    when.textContent=`${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일`
    howMany.textContent=`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`:seconds}`
    li.appendChild(when)
    li.appendChild(howMany)
    li.appendChild(delBtn)
    li.id= newId
    history.appendChild(li)
    const recObj={
        text:when.textContent,
        number:howMany.textContent,
        id:newId
    }
    records.push(recObj); //위에서 만든 recObj를 records안에 집어 넣는다.
    localStorage.setItem('records', JSON.stringify(records)) //localstorage의 'records'라는 key에 records에 있는 배열들을 string의 형태로 저장한다.
    //localstorage는 js의 오브젝트를 저장할 수 없기 때문에 stringify를 이용하여 object->string으로 바꿔 저장해야 한다.
}
```
<br>

## Delete button
아래는 위에 보이는 `delBtn`의 `addEventListner`에 들어간 함수의 정의이다.  
`delBtn`을 누르면 타겟이 되는 버튼의 `parentNode`를 삭제하고 이것을 `filter`을 이용하여, 타겟이 되는 버튼을 제외한 배열을 만들고 그것을 기존에 `records`배열에 넣어, 다시 저장하는 방식이다.

```js
function deleteRec(event){
    const li=event.target.parentNode
    history.removeChild(li)
    const cleanRec=records.filter(function(rec){
        return rec.id!==parseInt(li.id)
    })
    records=cleanRec;
    localStorage.setItem('records', JSON.stringify(records))
}
```
<br>

## Load it from local storage
불러올 때(새로고침할 때)는 `records`배열에서 아이템을 가져온 후, `string`의 형태로 저장된 `localStorage`의 정보들을 다시 `object`형태로 바꾸어 가져온 후, 그것을 위한 공간들을 save때 했던 것처럼 다시 만들어 주면 된다.

```js
function loadRecords(){
    const loadedRecords=localStorage.getItem('records')
    if(loadedRecords!==null){
        const parsedRecords= JSON.parse(loadedRecords) //object로 바꿔주는 과정
        records=parsedRecords
        for(let i=0;i<records.length;i++){
            const li=document.createElement("li")
            const delBtn=document.createElement("button")
            const when=document.createElement("span")
            const howMany=document.createElement("span")
            howMany.style.margin="20px"
            delBtn.addEventListener("click",deleteRec)
            delBtn.textContent="삭제"
            li.appendChild(when)
            when.textContent=records[i].text
            li.appendChild(howMany)
            howMany.textContent=records[i].number
            li.appendChild(delBtn)
            li.id= records[i].id
            history.appendChild(li)
        }
    }
}
```