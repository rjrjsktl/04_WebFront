// Node 확인하기
document.getElementById("btn1").addEventListener("click", function () {
    // 부모
    // 요소.parentNode : 요소의 부모 노드를 탐색해서 반환

    // 자식
    // 요소.childNodes : 요소의 자식 노드를 모두 반환(NodeList 형태)
    // 요소.firstChild : 첫 번째 자식 노드를 탐색해서 반환
    // 요소.lastChild : 마지막 자식 노드를 탐색해서 반환
    // 요소.childNodes[인덱스] : 인덱스 번째 자식 노드를 탐색해서 반환

    // 형제
    // 요소.previousSibling : 요소의 이전 형제 노드를 반환
    // 요소.nextSibling : 요소의 다음 형제 노드를 반환

    // #test 의 자식 노드를 모두 얻어와 확인
    const testNodeList = document.getElementById("test").childNodes;
    console.log(testNodeList);

    // 노드 탐색
    const li1 = document.getElementById("li1");
    console.log(li1.parentNode); // 부모 노드 탐색(ul#test)

    // #li1 의 부모의 배경색을 orange로 변경 (노드 탐색 활용 방법)
    li1.parentNode.style.backgroundColor = "orange";

    // #li1의 부모노드의 마지막 부분에 "ABCD"라는 text node 추가
    // 요소.append(요소 또는 노드) : 마지막 자식으로 추가(덧붙이다)
    li1.parentNode.append("ABCD");

    // #test의 첫번째 자식 노드 찾기
    console.log(test.firstChild);
    // #test의 마지막 자식 노드 찾기
    console.log(test.lastChild);
    // #test의 자식 노드 중 6번째 인덱스 노드 찾기
    console.log(test.childNodes[5]);
    // #test의 자식 노드 중 5번째 인덱스 노드의 마지막자식으로 "ㅋㅋㅋ" 추가하기
    test.childNodes[5].append("ㅋㅋㅋ");
    // #test의 자식 노드 중 5번째 인덱스의 이전 형제 노드
    console.log(test.childNodes[5].parentSibling);
    // #test의 자식 노드 중 5번째 인덱스의 다음 형제 노드
    console.log(test.childNodes[5].nextSibling);
    // #test의 자식 노드 중 5번째 인덱스의 이전 형제 노드의 이전 형제 노드
    console.log(test.childNodes[5].parentSibling.parentSibling);
})

// Element(요소) 탐색 확인
document.getElementById("btn2").addEventListener("click", function () {
    const test = document.getElementById("test"); // 부모 요소
    const li1 = document.getElementById("li1"); // 자식 요소

    // #li1의 부모 요소 탐색
    console.log(li1.parentElement);

    // #li1의 부모 요소의 부모 요소 탐색
    console.log(li1.parentElement.parentElement)

    //#test의 모든 자식 요소 탐색
    const list = test.children;
    console.log(test.children);

    //#test의 첫번째 자식 요소 탐색
    console.log(test.firstElementChild);

    //#test의 마지막 자식 요소 탐색
    console.log(test.lastElementChild);

    //#test의 자식 요소 중 2번 인덱스 탐색
    console.log(list[2]);

    //-----------------------------------------------------------------

    // #test의 자식 요소 중 2번 인덱스의 이전 형제 요소 클릭시
    // 작성된 내용을 alert로 출력
    list[2].previousElementSibling.addEventListener("click", function () {
        // 작성된 내용을 alert로 출력
        // this == 이벤트가 발생한 요소
        // == #test의 자식 요소중 2번 인덱스의 이전 형제 요소
        alert(this.innerText);

        // 이벤트가 발생한 요소의 다음 다음 형제 요소의 배경색을 red로 변경
        this.nextElementSibling.nextElementSibling.style.backgroundColor = 'red';
    })

    //-----------------------------------------------------------------
})

// innerHTML


const btn3 = document.getElementById("btn3");
const div3 = document.getElementById("div3");

let count3 = 1;

btn3.addEventListener("click", function () {
    if (count3 <= 10) {
        const input = "<input type = 'text'>";
        div3.innerHTML += "<div>" + count3 + input + "</div>";
        // <div>
        //     count3
        //     < input type='text' />
        // </div>
        count3++;
    }
})

const btn4 = document.getElementById("btn4");
const div4 = document.getElementById("div4");
let count4 = 1;

btn4.addEventListener("click", function () {
    if (count4 <= 10) {
        //document.createElement("태그명")
        //> 해당 태그 요소를 생성하여 반환
        // > 요소를 생성할 뿐 화면에 추가되지않는다.

        const div = document.createElement("div");
        const input = document.createElement("input")


        //<div>count4 <input type='text' /></div>
        div.innerText = count4;
        count4++;

        //input을 div의 마지막 자식으로 추가
        // 요소.append(노드 또는 요소)
        //>> 요소의 마지막 자식으로 추가
        div.append(input);

        // #div4의 마지막 자식으로 추가
        div4.append(div);

        // <div id="div4">
        //<div> count4 <input type='text' /></div>
        //<div> count4 <input type='text' /></div>
        //클릭할때마다 늘어남...
        //</div>

    }
})