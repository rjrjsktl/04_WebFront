const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function plus() {
    result.innerText = Number(num1.value) + Number(num2.value)
}
function minus() {
    result.innerText = Number(num1.value) - Number(num2.value)
}
function muiti() {
    result.innerText = Number(num1.value) * Number(num2.value)
}
function div() {
    result.innerText = Number(num1.value) / Number(num2.value)
}
function mod() {
    result.innerText = Number(num1.value) % Number(num2.value)
}
