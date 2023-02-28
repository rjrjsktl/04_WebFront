/*
    아이디 : 값이 변했을 때
*/

const inputId = document.getElementById("inputId");

inputId.addEventListener("change", function() {
    // 영어 소문자로 시작하고
    // 영어 대/소문자, 숫자, -, _ 로만 이루어진 6~14 글자 사이
    const regEx1 = /^[a-z][\w_-]{5,13}$/;

    // - 형식이 일치할 경우
    // 입력창 배경색 green로 변경
    if(regEx1.test(this.value)) {
        this.style.backgroundColor = "green";
        this.style.color = "white";
    }
    else {
        this.style.backgroundColor = "red";
        this.style.color = "white";
    }
})

/* 비밀번호 확인 : 키보드가 올라올 때 */
const inputPw = document.getElementById("inputPw");
const inputPwConfirm = document.getElementById("inputPwConfirm");

inputPwConfirm.addEventListener("keyup", function() { 

    inputPwConfirm.value = "";

    // 비밀번호입력해주세요 라는 경고창 출력
    alert("비밀번호를 입력하세요.");



})


























// document.getElementById("userid").addEventListener("change", function() {

//     const regEx1 = /^[a-z][A-Za-z0-9-_]{6,14}$/

//     const userid = document.getElementById("userid");

//     if(regEx1.test(this.value) != null) {
//         if(regEx1.test(this.value)) {
//             userid.classList.add("confirm");
//             userid.classList.remove("error");
//         }
//         else {
//             userid.classList.add("error");
//             userid.classList.remove("confirm");
//         }
//     }
//     else {
//         userid.classList.toggle("confirm");
//         userid.classList.toggle("error");
//     }
// })

// document.getElementById("userpw").addEventListener("keyup", function() {

//     const regEx1 = /^[a-zA-Z0-9!@#$%^&*()-_=+]{6,14}$/;

//     const pwrlt = document.getElementById("pwrlt");
//     if(pwrlt.test(this.value)) {


//     }



// })




    


