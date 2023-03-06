const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function calc(btn) {

    const op = btn.innerText; // -> + - * / %

    // 현재 input요소에 작성된 값을 얻어와서 변수에 저장
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    // eval("코드 형식의 문자열")
    // -> 매개변수의 문자열을 JS 코드로 해석/수행 함수
    // -> 속도가 느림 + 보안 이슈로 인해 사용 x
    // eval(n1 + op + n2);

    result.innerText = new Function( "return " + n1 + op + n2)();
}
