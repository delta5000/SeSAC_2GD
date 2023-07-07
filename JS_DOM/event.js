const btn1 = document.querySelector(".btn--black");
const btn2 = document.querySelector(".btn--green");
const btn3 = document.querySelector(".btn--blue");
const btn4 = document.querySelector(".btn--red");

btn1.addEventListener("click", function () {
  alert("버튼1을 눌럿다");
});

btn1.addEventListener("mouseover", function () {
  btn1.style.backgroundColor = "gray";
}); //마우스 치워도 유지됨

const container = document.getElementById("container");
btn2.addEventListener("click", () => {
  const div = document.createElement("div");
  div.innerText = "안녕";
  div.style.backgroundColor = "pink";
  container.append(div);
});

function changeColor() {
  const divs = document.querySelectorAll("#container div");
  for (let d of divs) {
    d.style.backgroundColor = "skyblue";
  }
  divs[divs.length - 1].style.backgroundColor = "red";
}

//괄호가 있으면 즉시 실행되서 함수에 ()를 적으면 안됨
btn3.addEventListener("click", changeColor);

function btnColorChanger() {
  this.style.backgroundColor = "yellow";
}

btn4.addEventListener("click", btnColorChanger);

//click 외의 많은 동작들
//스크롤 이벤트
//window에 줘야 함

window.addEventListener("scroll", () => {
  // console.log(scrollY);
  if (scrollY > 220) {
    document.querySelector(".pos").style.opacity = "1";
  } else {
    document.querySelector(".pos").style.opacity = "0";
  }
});

//
const btn = document.querySelector("button");
const input = document.querySelector("input");

//클릭이라는 정보다 이벤트에 담겨있다.
btn.addEventListener("click", function (event) {
  console.log(event);
});

//이벤트는 키라는 값을 가지고 있다. 코드라는 값도 가지고있다.
input.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    console.log("up");
  } else if (event.key === "ArrowDown") {
    console.log("down");
  } else {
    console.log(event);
  }
});

//방향키 위 아래 왼쪽 오른쪽을 누르면 각각 누를때마다 up,down,let,right
//if에 enter키를 눌렀을 때 반응을 원하면
//event.key === "Enter" 로 작성할 수 있다.

//변경 이벤트

const chgInput = document.getElementById("change-input");
chgInput.addEventListener("input", () => {
  console.log("변경중");
  let div = document.querySelector(".box");
  div.innerHTML = chgInput.value;
});
chgInput.addEventListener("change", () => {
  console.log("변경되었어요!");
});

/*
input : 현재 input에 변경사항이 존재하는 순간을 계속 인식
실시간으로 바로 반영할 수 있음 

shift, ctrl 등 입력값이 변하지 않는다면 이벤트 발생 하지 않음*/

//폼이 제출되는 이벤트
//submit form에 적용하는 이벤트
const todoForm = document.querySelector("#todo-form");
const todos = document.querySelector(".todos");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //폼이 실제로 제출되지 않도록 이벤트를 막는 것
  //새로고침 방지

  const todoInput = document.querySelector('[name="todo"]');
  console.log(todoInput.value); // 내용 받아오는건 .value 인 것 기억하기!
  const todo = todoInput.value;

  // const li = document.createElement("li");
  // //<li></li>
  // // li.textContent = todo;
  // li.append(todo);

  // todos.append(li);
  //만약에 제출할 때 공백이 들어왔을 때는 추가하지 않으려면??
  //답:앞뒤 공백 없애주는 trim 사용
  if (todoInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.append(todoInput.value);
    todos.append(li);
  }

  //엔터 이후에 입력창 비우기
  todoInput.value = "";
});
