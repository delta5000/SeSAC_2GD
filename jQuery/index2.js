//jq val() 사용
function getValue() {
  //input의 value를 가지고와서
  //alert 창에 띄워줌
  const value = $("input").val();
  alert(value);
}
function setValue() {
  $("input").val("설정완료");
}

//css사용

function chgCssJs() {
  //스판의 글자크기 20px
  //글자색 빨강

  let span = document.querySelector("span");
  span.style = "font-size:20px; color:red;";
}

function chgCssJq() {
  //글자크기 40ㅍㅅ
  //글자색 파란색

  $("span").css("font-size", "40px");
  $("span").css("color", "blue");
}

function getCssJq() {
  //css 특정 속성값 가져오기
  console.log($("span").css("color"));
}

//arrt

function changeAttrJs() {
  let a = document.querySelector("a");
  a.setAttribute("href", "http://naver.com");
}
function changeAttrJq() {
  $("a").attr("href", "http://www.daum.net");
  $("a").attr("target", "_self");
}

//text
function changeTextJs() {
  let p = document.querySelector(".p-text");
  p.innerText = "js로 변경";
}
function changeTextJq() {
  $(".p-text").text("jq로 변경");
}

/* html() */
function changeHtmlJs() {
  let p = document.querySelector(".p-html");
  p.innerHTML = "js 로 변경 &hearts;";
}

function changeHtmlJq() {
  $(".p-html").html("jq로 변경 &hearts;");
}

//append로 추가
function appendJs() {
  let ul = document.querySelector(".colors");
  let li = document.createElement("li");
  li.innerText = "마지막 자식으로 추가된 js";

  ul.append(li);
}
function appendJq() {
  $(".colors").append("<li>마지막 자식으로 추가된 jq</li>");
}
//prepend
function prependJs() {
  let ul = document.querySelector(".colors");
  let li = document.createElement("li");
  li.innerHTML = "<h4>첫 자식으로 추가된 js</h4>";

  ul.prepend(li);
}
function prependJq() {
  $(".colors").prepend("<h4>첫 자식으로 추가된 jQ</h4>");
}
//기준이 되는 형제 요소를 선택.그것의 앞에 붙음
function beforeJs() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "이전 형제요소로 추가된 js";
  green.before(li);
}
function beforeJq() {
  $(".green").before("<li>이전형제요소로 추가된 jq</li>");
}
//
function afterJs() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");

  li.innerText = "다음 형제요소로 추가된 js";
  green.after(li);
}
function afterJq() {
  $(".green").after("<li>다음 형제요소로 추가된 jq</li>");
}

//요소삭제

function removeJs() {
  let li2 = document.querySelector("#li2");
  li2.remove();
}
function removeJq() {
  $("#li2").remove();
}

//
function emptyJs() {
  let num = document.querySelector("ul.num");
  num.innerHTML = "";
}
function emptyJq() {
  $("ul.num").empty();
}

//요소탐색
function findParent() {
  console.log($(".child2").parent());
}

function findParents() {
  console.log($(".child2").parents());
}

function findNext() {
  console.log($(".child").next());
}

function findPrev() {
  console.log($(".child").next());
}

function findChirdren() {
  console.log($(".parent").chirdren());
}

//
function addClass() {
  $("#hi").addClass("fs-50");
}

function removeClass() {
  $("#hi").removeClass("fs-50");
}

function hasClass() {
  $("#hi").hasClass("fs-50");
}

function toggleClass() {
  $("#hi").toggleClass("bg-pink");
}
