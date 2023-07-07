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
