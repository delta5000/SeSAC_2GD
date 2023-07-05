const div1 = document.getElementById("div1");

/*
1.태그 내부 내용

-innerHTML : 요소안의 코드를 가져오거나 수정
-innerText : 요소안의 텍스트를 가져오거나 수정
-textContent : innerText처럼 텍스트 정보 표시
 */

console.log(div1.textContent);
console.log(div1.innerText);
console.log(div1.innerHTML);

div1.innerHTML = "여기는 <b>첫번째<b> div 태그입니다"; //태그로 인식함
div1.innerText = "              여기는 <b>첫번째<b> div 태그입니다 &hearts;"; //글자로 인식함
console.log(div1.innerText); //빈공간 인식 안함
div1.textContentext = "          여기는 <b>첫번째<b> div 태그입니다 &hearts;"; //글자로 인식함
console.log(div1.textContent); //빈공간 인식함

/*
2.속성

- setAttribute() : 속성값 설정
- getAttribute() : 속성값 가져오기
*/

//메소드로 접근 후 속성 변경

const naver = document.getElementById("naver");
const pooh = document.querySelector("#pooh");

naver.setAttribute("href", "http://www.google.com"); //속성, 뭐로바꿀지 내용
naver.innerText = "google";

//점으로 속성에 접근 후 변경
console.log(pooh.src);
pooh.alt = "푸사진";

/*
3. CSS 지정
*/

const h1 = document.querySelector("h1");
const list = document.querySelectorAll("li");
//3-1 style 속성 사용
for (let li of list) {
  console.log(li);
  li.style.backgroundColor = "pink";
  li.style.color = "#fff";
  li.style.fontSize = "1.3rem";
}

//3-2 classList 사용

console.log(h1.classList);

h1.classList.add("add-h1");
h1.classList.remove("add-h1");

h1.classList.toggle("add-h1"); //있으면 없애고 없으면 생기게 한다..

for (let a of list) {
  console.log(a);
  a.className = "friend";
}

//classlist는 css에서 이미 만들어줬기 때문에 적용이 되는 것

//이요르 사진으로 변경
//alt
pooh.setAttribute("src", "./img/eeyore.jpg");
pooh.setAttribute("alt", "이요르");

pooh.style.width = "150px";

/* 4.요소 생성,추가,삭제,접근 */

//요소에 접근하기
const little = document.getElementById("friends");
const tigger = document.getElementById("tigger");

//자식 노드에 접근
console.log(friends.children);
console.log(friends.children[0]);

//부모 노드에 접근
console.log(tigger.parentNode);

//형제 노드에 접근
console.log(tigger.previousElementSibling);
console.log(tigger.nextElementSibling);
console.log(tigger.nextElementSibling.nextElementSibling);

//4-1 요소생성
//생성
const container = document.querySelector(".container");
console.log(container);

const p = document.createElement("p");
p.innerText = "추가한 p";

console.log(p);

//추가
container.append(p);

const p2 = document.createElement("p");
p2.innerText = "p2";

const p3 = document.createElement("p");
p3.innerText = "p3";

p2.classList.add("p-2");
p3.classList.add("p-3");

container.prepend(p2);
container.append(p3);

const h2 = document.createElement("h2");
h2.innerText = "추가된 h2";

h1.before(h2);

const h3 = document.createElement("h3");
h3.innerText = "추가된 h3";

//실습

const div = document.createElement("div");
const img = document.createElement("img");
const span = document.createElement("span");

span.innerHTML = "안녕 나는 피글렛이야 &hearts;";
img.setAttribute("src", "./img/piglet.png");

div.append(img, span);

container.append(div);

//4-3 요소 삭제

const firstLi = document.querySelector("li");

// firstLi.remove();

friends.removeChild(firstLi);
