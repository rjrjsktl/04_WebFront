// 인라인 이벤트 모델 확인하기
function fnTest1(btn) {

    // JS로 요소에 CSS 지정시
    // inline 형식으로 CSS 코드가 추가된다.

    console.log(btn);
    btn.style.color = "white";
    btn.style.backgroundColor = "black";
    btn.style.cursor = "pointer";
}

// 고전 이벤트 모델
document.getElementById("btn1").onclick = function() {
    alert("버튼이 클리됨");

    // 고전/표준 이벤트 모델 장점
    // -> 이벤트 제거가 가능함

    // 요소의 속성중 on이벤트명(이벤트 리스너) 속성에 함수 대신 null을
    // 대입하여 이벤트 삭제
    document.getElementById("btn1").onclick = null;
}

// 하나의 요소에 여러이벤트 추가 가능
document.getElementById("btn1").onmouseover = function() {
    document.getElementById("btn1").style.backgroundColor = "yellow";
}
document.getElementById("btn1").onmouseout = function() {
    document.getElementById("btn1").style.backgroundColor = "red";
}

// 고전 이벤트 모델 단점
// -> 한요소에 동일한 이벤트 리스너에 대한
//  다수의 이벤트 핸들러를 작성할 수 없다.
//  (마지막으로 대입된 이벤트 핸들러만 적용)
// ->해결 방법 : 표준 이벤트 모델
document.getElementById("btn1").onclick = function() {
    alert("새로운 이벤트 처리방법");
}

// 표준 이벤트 모델
const btn2 = document.getElementById("btn2");

// btn2.addEventListener("이벤트명", 함수);

btn2.addEventListener("click", function() {
    
    // 이벤트 핸들러 내부에 작성된 this == 이벤트가 발생한 요소
    console.log(this)

    this.style.backgroundColor = "pink";
    this.style.border = "3px solid red";
    this.style.padding = "18px";
    this.style.display = "black";
})

//  고전 이벤트 모델 단점 보완 확인
btn2.addEventListener("click", function() {
    this.style.fontSize = "20px";
    this.style.fontWeight = "bold";
    this.style.color = "red";
    this.style.border = "3px solid green"
})

document.getElementById("input1").addEventListener("keyup", function() {

    // 박스 요소 선택
    const div1 = document.getElementById("div1");

    // 배경색 변경
    div1.style.backgroundColor = this.value;
})

document.getElementById("div2").addEventListener("mouseover", function() {

    this.style.width = "300px";
    this.style.backgroundColor = "pink";
})
document.getElementById("div2").addEventListener("mouseleave", function() {

    this.style.width = "0px";
    this.style.visibility = "hidden";
})