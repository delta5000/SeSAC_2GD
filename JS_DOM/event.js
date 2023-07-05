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

btn3.addEventListener("click", changeColor);

function btnColorChanger() {
  this.style.backgroundColor = "yellow";
}

btn4.addEventListener("click", btnColorChanger);

//click 외의 많은 동작들
//스크롤

//window에 줘야 함

window.addEventListener("scroll", () => {
  console.log(scrollY);
  if (scrollY > 220) {
    document.querySelector(".pos").style.opacity = "1";
  } else {
    document.querySelector(".pos").style.opacity = "0";
  }
});
